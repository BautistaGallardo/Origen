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
        const { nombre, apellido, email, telefono, documento, nacionalidad, password, fechaNacimiento }
            = await req.json() as { nombre: string, apellido: string, email: string, telefono: string, documento: string, nacionalidad: string, password: string, fechaNacimiento: string };

        if (!nombre) return getErrorResponse(400, "no data provided")
        if (!apellido) return getErrorResponse(400, "no data provided")
        if (!email) return getErrorResponse(400, "no data provided")
        if (!fechaNacimiento) return getErrorResponse(400, "no data provided")
        if (!telefono) return getErrorResponse(400, "no data provided")
        if (!documento) return getErrorResponse(400, "no data provided")
        if (!nacionalidad) return getErrorResponse(400, "no data provided")
        if (!password) return getErrorResponse(400, "no data provided")

        const hashedPassword = await hash(password, 10);

        const user = await prisma.user.create({
            data: {
                name: nombre,
                lastName: apellido,
                email: email,
                password: hashedPassword,
                phone: telefono,
                birthday: fechaNacimiento,
            },
        });

        const patient = await prisma.patient.create({
            data: {
                userId: user.id,
            },
        });

        const document = await prisma.typeDocument.create({
            data: {
                type: "DNI",
                IdentityNumber: documento,
                userId: user.id,
            },
        });

        return new NextResponse(
            JSON.stringify({
                status: "success",
                data: { user: { ...user, password: undefined }, patient: { ...patient }, document: { ...document } },
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