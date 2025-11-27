import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { LOCALE_COOKIE } from "./lib/i18n";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const pathname = request.nextUrl.pathname.toLowerCase();

  if (pathname.startsWith("/cn") || pathname.startsWith("/zh")) {
    response.cookies.set(LOCALE_COOKIE, "cn", { path: "/" });
  } else if (pathname.startsWith("/en")) {
    response.cookies.set(LOCALE_COOKIE, "en", { path: "/" });
  }

  return response;
}

export const config = {
  matcher: ["/", "/cn/:path*", "/zh/:path*", "/en/:path*"],
};
