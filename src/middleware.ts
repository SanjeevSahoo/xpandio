import NextAuth from "next-auth";

import { DEFAULT_REDIRECT, PUBLIC_ROUTES, ROOT } from "@/_common/constants";
import { authConfig } from "./app/[locale]/auth/auth.config";
import { NextRequest } from "next/server";
import { i18nRouter } from "next-i18n-router";
import i18nConfig from "./app/localization/i18nConfig";

const { auth } = NextAuth(authConfig);

export function middleware(request: NextRequest) {
  return i18nRouter(request, i18nConfig);
}

export default auth((req) => {
  const { nextUrl } = req;

  const isAuthenticated = !!req.auth;
  const isPublicRoute = PUBLIC_ROUTES.includes(nextUrl.pathname);

  if (isPublicRoute && isAuthenticated)
    return Response.redirect(new URL(DEFAULT_REDIRECT, nextUrl));

  if (!isAuthenticated && !isPublicRoute)
    return Response.redirect(new URL(ROOT, nextUrl));
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|images|favicon.ico).*)"],
};
