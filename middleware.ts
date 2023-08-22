import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  //const session = await getToken({request, secret: process.env.NEXTAUTH_SECRET})
  //console.log({session})

  /*
    if(!session){
        const requestedPage = request.nextUrl.pathname
        const url = request.nextUrl.clone()
        url.pathname = '/src/app/login'
        url.search = `p=${requestedPage}`

        return NextResponse.redirect(url)
    }
    */

  return NextResponse.next();
}

// autenticatio pages
export const config = {
  matcher: ["/src/app/admin"],
};
