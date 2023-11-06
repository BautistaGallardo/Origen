import {prisma} from "@/libs/prisma";

export async function listPatient(id: string) {
    try {
      const patients = await prisma.patient.findMany();
  
      if (patients) {
        return patients;
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
