import { prisma } from "@/libs/prisma";

// list reservation by id_MedicalAppointment
export async function listReservationById(id: string) {
    try {
        const reservation = await prisma.reservation.findMany({
            where: {
                patientId: id
            }
        })

        if (reservation) {
            return reservation
        }
    } catch (error) {
        console.error(error)
        return "error"
    }
};


export async function listMedicalAppointmentById(id: string) {
    try {
        const medicalAppointment = await prisma.medicalAppointment.findUnique({
            where: {
                id: id
            }
        })

        if (medicalAppointment) {
            return medicalAppointment
        }
    } catch (error) {
        console.error(error)
        return "error"
    }
};



export async function listReservationWithProfessional(id: string) {
    try {
        const reservations = await prisma.reservation.findMany({
            where: {
                patientId: id
            },
            include: {
                patient: true,
                appointment: {
                    include: {
                        professional: {
                            include: {
                                professional: true
                            }
                        }
                    }
                }
            } 
        });

        return reservations;
    } catch (error) {
        console.error('Error retrieving reservations:', error);
        throw error; // Handle the error as needed
    }
}

export type Reservations = Awaited<ReturnType<typeof listReservationWithProfessional>>;



    

