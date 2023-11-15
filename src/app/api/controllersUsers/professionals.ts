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

// list professional by id
export async function professionalById(req: string){
    try{
        const professional = await prisma.professional.findUnique({
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