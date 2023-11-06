import { getEnvVariable, getErrorResponse} from "@/libs/helpers";
import { prisma } from "@/libs/prisma"
import { signJWT } from "@/libs/token"
import { LoginUserInput, LoginUserSchema } from "@/libs/validations/user.schema";
import { compare } from "bcrypt";
import { NextRequest, NextResponse } from "next/server";
import { ZodError } from "zod"
import { whatRole } from "@/app/api/controllersUsers/users";

export async function POST(req:NextRequest) {
    try{
      const body = (await req.json()) as LoginUserInput;
      const data = LoginUserSchema.parse(body);

    const user = await prisma.user.findUnique({
      where: { email: data.email },
    });

    if (!user || !(await compare(data.password, user.password))) {
      return getErrorResponse(401, "Invalid email or password");
    }
      
      const JWT_EXPIRES_IN = getEnvVariable("JWT_EXPIRES_IN")
      const rolUser = await whatRole(user.id) 
      
      const token = await signJWT(
        {sub: user.id, rol: rolUser},
        {exp: `${JWT_EXPIRES_IN}m`}
      )

      const tokenMaxAge = parseInt(JWT_EXPIRES_IN) * 60;
      
      const cookieOptions = {
        name: "token",
        value: token,
        path: "/",
        secure: process.env.NODE_ENV !== "development",
        maxAge: tokenMaxAge,
      }

      const response = new NextResponse(
        JSON.stringify({
          status: "seccess",
          token
        }),
        {
          status: 200,
          headers: {"Content-Type": "application/json"}
        }
      )

      await Promise.all([
        response.cookies.set(cookieOptions),
        response.cookies.set({
          name: "logged-in",
          value: "true",
          maxAge: tokenMaxAge
        })
      ])
      
      return response;
    }catch(error: any){
      if(error instanceof ZodError){
        return getErrorResponse(400, "failed validation", error)
      }
      return getErrorResponse(500, error.message)
    }
}