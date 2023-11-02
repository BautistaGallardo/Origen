import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/libs/prisma";
import { errorMonitor } from "events";

/*
export async function POST(request:Request){
    const {firstName, lastName, identityCard, role, email, phone, birthDate, password} = await request.json();
    
    // Passwordo validation, could add modules as zod for types validations 
    if(!password || password.length < 6){
        return NextResponse.json(
            {
                message : 'La constraseña debe tener un minimo de 6 caracteres'
            },
            {
                status : 404
            }
        )

    }

    // chack email user
    try {
        const userFound = await prisma.user.findUnique({
            where:{
                email : {email}
            }
        })
    
        if(userFound){
            return NextResponse.json({
                message: 'El email ingresado ya existe dentro del sistema'
            },{
                status : 404
            })
        }
    
        // encrypting password and create user object
        const hashedPassword = await bcrypt.hash(password,12) 
        const newUser = {
            nombre: firstName,
            apellido: lastName,
            documento: identityCard,
            rol: role,
            email: email,
            numero_celular: phone,
            fecha_nacimiento: birthDate,
            password: hashedPassword
        }
    
        // create new user into database 
        const createUser = await prisma.user.prisma({data:newUser})
        //console.log(createUser)
        
        // redirect user to login
        return NextResponse.redirect('./../login')
        
    } catch (error) {
        //console.log(error)
        if(error instanceof Error){
            return NextResponse.json({
                message: error.message
            },{
                status: 400
            })
        }
    }
}
*/