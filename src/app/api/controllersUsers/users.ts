import { prisma } from "@/libs/prisma";
import { error } from "console";

export async function whatRole(id: string) {
    try {
      
      const patient = await prisma.patient.findUnique({
        where: { userId: id }
      });
  
      if (patient) {
        return "patient";
      }
  
      const professional = await prisma.professional.findUnique({
        where: { userId: id }
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

 export default async function getPatientId(req: string) {
  try {
    const id = req;
    const user = await prisma.user.findUnique({
      where: {
        id: id,
      },
    });

    if (user) {
      return user;
    } else {
      return error("user don't exist");
    }
  } catch (error) {
    // Manejar errores de la base de datos u otros errores aquí.
    return error;
  }finally {
    await prisma.$disconnect();
  }
}