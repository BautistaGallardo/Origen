import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma"
import { InputMedicalAppointment, MedicalAppointmentSchema } from "@/libs/validations/user.schema";

export default async function createMedicalAppointment(res: NextResponse) {
    
    const body = (await res.json()) as InputMedicalAppointment
    const data = MedicalAppointmentSchema.parse(body)
    const statusDefault = "pending";
    try {
        // Crea una cita médica
        const medicalAppointment = await prisma.medicalAppointment.create({
            data: {
                date: data.date,
                timeStart: data.hour,
                status: statusDefault,
                professional: {
                    connect: {
                        id: "1"
                    }
                },
            }
        });

        return new NextResponse(
            JSON.stringify({
                status: "success",
                data: medicalAppointment
            }),
            {
                status: 201,
                headers: { "Content-Type": "application/json" }
            }
        )
    } catch (error) {
        console.error(error);
        throw new Error("Error creating medical appointment");
    }
}