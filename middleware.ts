import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { decodeToken } from "@/lib/jwt";
import { canAccess } from "./lib/RoleBasedRoutes";

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const accessToken = req.cookies.get("accessToken")?.value;

  if(accessToken) return NextResponse.next();

  // Allow public routes without auth
  // const publicRoutes = ["/login"];
  const publicRoutes = ["/", "/payments", "/students/**", "/public"];
  if (publicRoutes.some((r) => pathname.startsWith(r))) {
    return NextResponse.next();
  }

  // No token → redirect to login
  if (!accessToken) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Decode and validate role
  const decoded = decodeToken(accessToken);
  if (!decoded || !decoded.role) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Role-based check
  const isAllowed = canAccess(decoded.role, pathname);

  if (!isAllowed) {
    return NextResponse.redirect(new URL("/403", req.url));
  }

  // ✅ Allow access
  return NextResponse.next();
}

// Specify which routes the middleware runs on
export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
