import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { NextRequest, NextResponse } from "next/server";

const intlMiddleware = createMiddleware(routing);

export default async function proxy(request: NextRequest) {
  // Ambil pathname atau URL dari request
  const pathName = request.nextUrl.pathname;
  const locale = pathName.split("/")[1]; // ambil locale

  // deklarasi URl dengan Path tertentu
  const isADmin = pathName.includes("/adminkelola");
  const isLogin = pathName.includes("/adminkelola/login");

  // Jika path mengandung /adminkelola dan bukan /adminkelola/login, maka lakukan pengecekan token
  if (isADmin && !isLogin) {
    const token = request.cookies.get("token")?.value;

    // Jika token tidak ada, redirect ke halaman login
    if (!token) {
      return NextResponse.redirect(
        new URL(`/${locale}/adminkelola/login`, request.url),
      );
    }
  }

  // For all other paths, use the intl middleware
  return intlMiddleware(request);
}

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
