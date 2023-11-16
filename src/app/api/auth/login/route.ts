import { getEnvVariable, getErrorResponse } from "@/libs/helpers";
import { prisma } from "@/libs/prisma"
import { signJWT } from "@/libs/token"
import { LoginUserInput, LoginUserSchema } from "@/libs/validations/user.schema";
import { compare } from "bcrypt";
import { NextRequest, NextResponse } from "next/server";
import { ZodError } from "zod"
import { whatRole } from "@/app/api/controllersUsers/users";
import { ResponseCookie } from "next/dist/compiled/@edge-runtime/cookies";

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as LoginUserInput;
    const data = LoginUserSchema.parse(body);

    const user = await prisma.user.findUnique({
      where: { email: data.email },
    });

    if (!user || !(await compare(data.password, user.password))) {
      return getErrorResponse(401, "Invalid email or password");
    }

    const JWT_EXPIRES_IN = getEnvVariable("JWT_EXPIRES_IN")
    const rolUser = await whatRole(user.id) // Esto no deberia venir de un controller sino de un servicio

    const token = await signJWT(
      { sub: user.id, rol: rolUser },
      { exp: `${JWT_EXPIRES_IN}` }
    )

    const tokenMaxAge = parseInt(JWT_EXPIRES_IN) * 60;

    const tokenCookie: ResponseCookie = {
      name: "token",
      value: token,
      secure: process.env.NODE_ENV !== "development",
      maxAge: tokenMaxAge,
      httpOnly: true,
    }

    const response = new NextResponse(
      JSON.stringify({
        status: "success",
        token
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" }
      }
    )

    response.cookies
      .set(tokenCookie)
      .set({
        name: "logged-in",
        value: "true",
        maxAge: tokenMaxAge,
        httpOnly: true
      })

    return response;
  } catch (error: any) {
    if (error instanceof ZodError) {
      return getErrorResponse(400, "failed validation", error)
    }
    return getErrorResponse(500, error.message)
  }
}