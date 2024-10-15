import {NextRequest, NextResponse} from "next/server"
import {redirect} from "next/navigation"

export async function GET(req:NextRequest) {
    const response = new NextResponse(JSON.stringify({status: "success"}),{
        status: 200,
        headers: {"Content-Type":"application/json"}
    })

    await Promise.all([
        response.cookies.set({
            name: "token",
            value:"",
            maxAge: -1
        }),
        response.cookies.set({
            name:"logged-in",
            value: "",
            maxAge: -1
        })
    ])
    return response
}

/// aca va un action sencillito que es typescript

export async function logoutAction() {
    /* @ts-ignore */
    cookies().set({ name: "jwt", value: "", expires: new Date() });
    redirect("/")
}