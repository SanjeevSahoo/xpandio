import NextAuth from "next-auth";

import { DEFAULT_REDIRECT, PUBLIC_ROUTES, ROOT } from "@/_common/constants";
import { authConfig } from "./app/[locale]/auth/auth.config";
import { NextRequest, NextResponse } from "next/server";
import { i18nRouter } from "next-i18n-router";
import i18nConfig from "./app/localization/i18nConfig";

const { auth } = NextAuth(authConfig);

export async function middleware(request: NextRequest) {
  try {
    const authResponse = await auth();
    const { pathname } = request.nextUrl;
    const pathnameHasLocale = i18nConfig.locales.some(
      (locale) =>
        pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );
    if (!pathnameHasLocale) {
      request.nextUrl.pathname = `/${i18nConfig.defaultLocale}${pathname}`;
      return Response.redirect(new URL(request.nextUrl));
    }
    let currLocale = i18nConfig.defaultLocale;
    i18nConfig.locales.forEach((locale) => {
      if (pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`) {
        currLocale = locale;
      }
    });
    const localePublicRoutes = PUBLIC_ROUTES.map(
      (item) => `/${currLocale}${item}`
    );
    const localeDefaultRedirect = `/${currLocale}${DEFAULT_REDIRECT}`;
    const localeRoot = `/${currLocale}${ROOT}`;

    const isAuthenticated: boolean = Boolean(authResponse?.user);
    const isPublicRoute = localePublicRoutes.includes(request.nextUrl.pathname);

    if (isPublicRoute && isAuthenticated)
      return Response.redirect(new URL(localeDefaultRedirect, request.nextUrl));

    if (!isAuthenticated && !isPublicRoute)
      return Response.redirect(new URL(localeRoot, request.nextUrl));
    return i18nRouter(request, i18nConfig);
  } catch (error) {
    console.error("Middleware Error:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

// export default auth((req) => {
//   const { nextUrl } = req;

//   const isAuthenticated = !!req.auth;
//   const isPublicRoute = PUBLIC_ROUTES.includes(nextUrl.pathname);

//   if (isPublicRoute && isAuthenticated)
//     return Response.redirect(new URL(DEFAULT_REDIRECT, nextUrl));

//   if (!isAuthenticated && !isPublicRoute)
//     return Response.redirect(new URL(ROOT, nextUrl));
// });

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|images|favicon.ico).*)"],
};
