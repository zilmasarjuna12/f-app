import { getSessionCookie } from "better-auth/cookies";
import { type NextRequest, NextResponse } from "next/server";

const protectedPaths = ["/dashboard"];
const publicRoutes = ["/login", "/register"];

export async function middleware(request: NextRequest) {
  const cookie = getSessionCookie(request);
  const path = request.nextUrl.pathname;
  const isProtectedRoute = protectedPaths.includes(path);
  const isPublicRoute = publicRoutes.includes(path);

  if (isProtectedRoute && !cookie) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (isPublicRoute && cookie) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
