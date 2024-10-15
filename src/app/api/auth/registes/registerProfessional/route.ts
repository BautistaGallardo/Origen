import { getErrorResponse } from "@/libs/helpers"
import {prisma} from "@/libs/prisma"
import{
    RegisterProfessionalSchema,
} from "@/libs/validations/user.schema"
import {hash} from "bcrypt"
import { redirect } from "next/dist/server/api-utils"
import { NextRequest, NextResponse } from "next/server"
import {ZodError} from "zod"

export async function POST(req:NextRequest) {
    try{
        const body = (await req.json()) as RegisterProfessionalSchema
        const data = RegisterProfessionalSchema.parse(body)

        const hashedPassword = await hash(data.password,12)

        const userExiste = await prisma.user.findUnique({
            where:{
                email: data.email
            }
        })

        if(userExiste){
            const professional = await prisma.professional.create({
                data:{
                    userId : userExiste.id,
                    speciality: data.speciality,
                },
            })
            return new NextResponse(
                JSON.stringify({
                    status: "success",
                    data: { professional:{... professional}}
                }),
                {
                    status: 201,
                    headers: {"Content-Type": "application/json", location: "/"}
                }
            )
        }else{
            const user = await prisma.user.create({
                data:{
                    name: data.name,
                    lastName: data.lastName,
                    email: data.email,
                    password: hashedPassword,
                    phone: data.phone,
                    birthday: data.birthday
                },
            })
            const professional = await prisma.professional.create({
                data:{
                    userId : user.id,
                    speciality: data.speciality,
                },
            })
    
            const docuemt = await prisma.typeDocument.create({
                data:{
                    type : data.typeDocument,
                    IdentityNumber : data.document,
                    userId : user.id
                },
            })

            return new NextResponse(
                JSON.stringify({
                    status: "success",
                    data: { user: {... user, password:undefined},professional:{... professional},docuemt:{... docuemt}}
                }),
                {
                    status: 201,
                    headers: {"Content-Type": "application/json", location: "/"}
                }
            )
        }

    }catch(error: any){
        if(error instanceof ZodError){
            return getErrorResponse(400,"failed validation", error)
        }
        if (error.code === "P2002") {
            return getErrorResponse(409, "user with that email already exists");
        }

        return getErrorResponse(500, error.message)
    }
}