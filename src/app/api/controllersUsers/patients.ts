import {prisma} from "@/libs/prisma";

export interface patient {
  id: string;
  photo?: string;
  createAt: Date;
  updateAt: Date;
  userId: string;
  user: {
    nombre: string;
    apellido: string;
  };

}
// list patient by id
export async function listPatient(id: string) {
    const patient = await prisma.patient.findUnique({
      where: {
        id: id,
      }
    });
    return patient;
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
