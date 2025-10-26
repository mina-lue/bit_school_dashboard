import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { decodeToken } from "@/lib/jwt";
import { canAccess } from "./lib/RoleBasedRoutes";

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const accessToken = req.cookies.get("accessToken")?.value;


  const publicRoutes = ['/login', '/about', '/api', '/403' ];
  if (publicRoutes.some((r) => pathname.startsWith(r))) {
    return NextResponse.next();
  }
  

  if (!accessToken) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
  

  const decoded = decodeToken(accessToken);
  if (!decoded || !decoded.role) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  const isAllowed = canAccess(decoded.role, pathname);

  if (!isAllowed) {
    return NextResponse.redirect(new URL("/403", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
