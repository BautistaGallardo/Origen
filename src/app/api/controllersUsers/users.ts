import { prisma } from "@/libs/prisma";
import { error } from "console";

export interface user {
  name: string;
  lastName: string;
  email: string;
}
export async function whatRole(id: string) {
    try {

      const admin = await prisma.adminUser.findUnique({
        where: {userId:id}
      });
      
      if(admin){
        return "admin";
      }
      
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

 
 export async function getAllUsers() {
  const users = await prisma.user.findMany({
    include: {
      document: {  // Utiliza el nombre del campo en tu modelo User
        select: {
          id: true,
          type: true,
          IdentityNumber: true,
        },
      },  
    },
  });

  return users;
}

export type Users = Awaited<ReturnType<typeof getAllUsers>>;