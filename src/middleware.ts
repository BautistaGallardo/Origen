import { NextRequest,NextResponse } from "next/server";
import { verifyJWT } from "./libs/token";
import { getErrorResponse } from "./libs/helpers";

interface AuthenticatedRequest extends NextRequest {
  user: {
    id: string;
  };
}

let redirectToLogin = false;
export async function middleware(req: NextRequest) {
  let token: string | undefined;

  if (req.cookies.has("token")) {
    token = req.cookies.get("token")?.value;
  } else if (req.headers.get("Authorization")?.startsWith("Bearer ")) {
    token = req.headers.get("Authorization")?.substring(7);
  }

  if (req.nextUrl.pathname.startsWith("/login") && (!token || redirectToLogin))
    return;

  if (
    !token &&
    (req.nextUrl.pathname.startsWith("/api/users") ||
      req.nextUrl.pathname.startsWith("/api/auth/logout"))
  ) {
    return getErrorResponse(
      500,
      "You are not logged in. Please provide a token to gain access."
    );
  }

  const response = NextResponse.next();

  // esta estructura del middleware no esta completa, para poder terminarla primero necesito saber como esta
  // estructurada la pagian, por las urls
  try {
    if (token) {
      const { sub, rol } = await verifyJWT<{ sub: string, rol: string }>(token);
      response.headers.set("X-USER-ID", sub);

      if (req.nextUrl.pathname.startsWith("/api/users") || req.nextUrl.pathname.startsWith("/api/auth/logout")) {
        // Verificar el rol del usuario y tomar decisiones basadas en el rol.
        if (rol === "patient") {
          // Lógica para pacientes
          if (req.nextUrl.pathname.startsWith("/professional-only")) {
            // Si un paciente intenta acceder a una URL solo para profesionales, devolvera un error 403 (Acceso Prohibido).
            return getErrorResponse(403, "Acceso prohibido para pacientes"); // Esto despues de puede cambiar y mandarlo al perfil o a la homepage
          }
        } else if (rol === "professional") {
          // Lógica para profesionales
          if (req.nextUrl.pathname.startsWith("/patient-only")) {
            // Si un profesional intenta acceder a una URL solo para pacientes, devolvera un error 403 (Acceso Prohibido).
            return getErrorResponse(403, "Acceso prohibido para profesionales");
          }
        }
      }

      (req as AuthenticatedRequest).user = { id: sub };
    }
  } catch (error) {
    redirectToLogin = true;
    if (req.nextUrl.pathname.startsWith("/api")) {
      return getErrorResponse(500, "Token is invalid or user doesn't exists");
    }

    return NextResponse.redirect(
      new URL(`/login?${new URLSearchParams({ error: "badauth" })}`, req.url)
    );
  }


  

  const authUser = (req as AuthenticatedRequest).user;

  if (!authUser) {
    return NextResponse.redirect(
      new URL(
        `/login?${new URLSearchParams({
          error: "badauth",
          forceLogin: "true",
        })}`,
        req.url
      )
    );
  }

  if (req.url.includes("/login") && authUser) {
    return NextResponse.redirect(new URL("/profile", req.url));
  }

  return response;
}

// esto no esta actualizado para el nuevo formato del middleware
export const config = {
  matcher: ["/profile", "/login", "/api/users/:path*", "/api/auth/logout"],  
};
