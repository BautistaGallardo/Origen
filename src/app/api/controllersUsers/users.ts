import { prisma } from "@/libs/prisma";


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
    const admin = await prisma.adminUser.findUnique({
      where: { id: id }
    });
    if (admin) {
      return "admin";
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