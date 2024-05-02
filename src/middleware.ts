import NextAuth from "next-auth";

import { DEFAULT_REDIRECT, PUBLIC_ROUTES, ROOT } from "@/_common/constants";
import { authConfig } from "./app/auth/auth.config";
import { NextRequest, NextResponse } from "next/server";

const { auth } = NextAuth(authConfig);

export async function middleware(request: NextRequest) {
  try {
    const authResponse = await auth();

    const isAuthenticated: boolean = Boolean(authResponse?.user);
    const isPublicRoute = PUBLIC_ROUTES.includes(request.nextUrl.pathname);

    if (isPublicRoute && isAuthenticated)
      return Response.redirect(new URL(DEFAULT_REDIRECT, request.nextUrl));

    if (!isAuthenticated && !isPublicRoute)
      return Response.redirect(new URL(ROOT, request.nextUrl));
  } catch (error) {
    console.error("Middleware Error:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export const config = {
  matcher: ["/((?!api/auth|_next/static|_next/image|images|favicon.ico).*)"],
};
