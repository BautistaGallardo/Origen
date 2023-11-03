import { transcode } from "buffer";
import { NextResponse } from "next/server";
import { ZodError } from "zod";
import { PrismaClient } from "@prisma/client";

// get environment variable, update type whenever add new environment variable
type EnvVariableKey = "JWT_SECRET_KEY" | "JWT_EXPIRES_IN"

export function getEnvVariable(key: EnvVariableKey): string{
    const value = process.env[key]

    if(!value || value.length === 0){
        console.error(`The environment variable ${key} is not set.`)
        throw new Error(`The environment variable ${key} is not set.`)
    }

    return value;
}

export function getErrorResponse(
    status: number = 500, 
    message: string,
    errors: ZodError | null = null
){
    return new NextResponse(
        JSON.stringify({
            status: status < 500 ? "fail" : "error",
            message,
            errors: errors ? errors.flatten() : null
        }),
        {
            status,
            headers: {"Content-Type": "aaplications/json"}
        }
    )
}

const prisma = new PrismaClient();

export async function whatRole(id: string) {
    try {
      const patient = await prisma.patient.findUnique({
        where: { id: id }
      });
  
      if (patient) {
        return "patient";
      }
  
      const professional = await prisma.professional.findUnique({
        where: { id: id }
      });
  
      if (professional) {
        return "professional";
      }
  
      // Si no es ni paciente ni profesional, puedes manejarlo de alguna otra manera, como devolver "unknown" o lanzar un error.
      return "unknown";
    } catch (error) {
      // Manejar errores, por ejemplo, lanzar un error o devolver un valor predeterminado en caso de un error.
      console.error(error);
      return "error";
    } finally {
      await prisma.$disconnect();
    }
  }