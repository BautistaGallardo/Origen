import {prisma} from "@/libs/prisma";

// list patient by id
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

// list all patient
export async function listAllPatient() {
  try{
    const patients = await prisma.patient.findMany()

    if(patients){
      return patients
    }
  }catch(error){
    console.error(error)
    return "error"
  }
} 

 // update patient by id
export async function updatePatient(id: string, data: any) {
    try {
      const patient = await prisma.patient.update({
        where: {
          id: id,
        },
        data: data,
      });
  
      if (patient) {
        return patient;
      }
    } catch (error) {
      console.error(error);
      return "error"; 
    }finally{
      await prisma.$disconnect();
    } 
  }
