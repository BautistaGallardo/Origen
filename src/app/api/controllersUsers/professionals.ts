import {prisma} from '@/libs/prisma'
// list professional by spaciality
export async function professionalBySpecility(req: string){
    try{
        const professional = await prisma.professional.findMany({
            where: {
                speciality: req
            }
        })

        if(professional){
            return professional
        }
    }catch(error){
        console.error(error)
        return "error"
    }
};

// search all professionals by speciality 
export async function searchProfessionalBySpeciality(req: string){
    try{
        const professional = await prisma.professional.findMany({
            where: {
                speciality: {
                    contains: req
                }
            }
        })

        if(professional){
            return professional
        }
    }catch(error){
        console.error(error)
        return "error"
    }
};

// funcion una sola vez todas las especialidades de los profesionales
export async function specialitiesProfessional() {
    try {
        const professionals = await prisma.professional.findMany({
            select: {
                speciality: true
            }
        });

        // Utilizar un conjunto (Set) para eliminar especialidades duplicadas
        const uniqueSpecialities = new Set(professionals.map(professional => professional.speciality));

        // Convertir el conjunto de vuelta a un array
        const uniqueSpecialitiesArray = Array.from(uniqueSpecialities);

        return uniqueSpecialitiesArray;
    } catch (error) {
        console.error(error);
        return "error";
    }
}


// list professional by id
export async function professionalById(id: string){
    try{
        const professional = await prisma.professional.findUnique({
            where: {
                userId: id 
            }
        })

        if(professional){
            return professional
        }
    }catch(error){
        console.error(error)
        return "error"
    }
};


// list all professionals
export async function listAllProfessional(){
    try{
        const professional = await prisma.professional.findMany()

        if(professional){
            return professional
        }
    }catch(error){
        console.error(error)
        return "error"
    }
};

export type professionals = Awaited<ReturnType<typeof listAllProfessional>>

// delete professional by id
export async function deleteProfessional(req: string){
    try{
        const professional = await prisma.professional.delete({
            where: {
                id: req
            }
        })

        if(professional){
            return professional
        }
    }catch(error){
        console.error(error)
        return "error"
    }
};

// update professional by id
export async function updateProfessional(req: string, data: any){
    try{
        const professional = await prisma.professional.update({
            where: {
                id: req
            },
            data: data
        })

        if(professional){
            return professional
        }
    }catch(error){
        console.error(error)
        return "error"
    }
};

// Id user by id professional
export async function idUserByIdProfessional(id: string){
    try{
        const professional = await prisma.professional.findUnique({
            where: {
                id: id
            }
        })

        if(professional){
            return professional
        }
    }catch(error){
        console.error(error)
        return "error"
    }
};

// get user by porfessional
export async function getUserByProfessional(id: string){
    try{
        const user = await prisma.user.findUnique({
            where: {
                id: id
            }
        })

        if(user){
            return user
        }
    }catch(error){

        console.error(error)
        return error
    }
};