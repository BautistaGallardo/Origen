import { getErrorResponse } from "@/libs/helpers"
import { prisma } from "@/libs/prisma"
import {
    RegisterUserInput,
    RegisterUserSchema,
} from "@/libs/validations/user.schema"
import { hash } from "bcrypt"
import { NextRequest, NextResponse } from "next/server"
import { ZodError } from "zod"

export async function POST(req: NextRequest) {
    try {
        const body = (await req.json()) as RegisterUserInput
        const data = RegisterUserSchema.parse(body)

        const hashedPassword = await hash(data.password, 12)

        const user = await prisma.user.create({
            data: {
                name: data.name,
                lastName: data.lastName,
                email: data.email,
                password: hashedPassword,
                phone: data.phone,
                birthday: data.birthday
            },
        })
        const patient = await prisma.patient.create({
            data: {
                userId: user.id
            },
        })
        const docuemt = await prisma.typeDocument.create({
            data: {
                type: data.typeDocument,
                IdentityNumber: data.document,
                userId: user.id
            },
        })

        return new NextResponse(
            JSON.stringify({
                status: "success",
                data: { user: { ...user, password: undefined }, patient: { ...patient }, docuemt: { ...docuemt } }
            }),
            {
                status: 201,
                headers: { "Content-Type": "application/json" }
            }
        )

    } catch (error: any) {
        if (error instanceof ZodError) {
            return getErrorResponse(400, "failed validation", error)
        }
        if (error.code === "P2002") {
            return getErrorResponse(409, "user with that email already exists");
        }

        return getErrorResponse(500, error.message)
    }
}