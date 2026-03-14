import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';
import { NextRequest, NextResponse } from 'next/server';
import { supabase } from './lib/supabase/client';
 
const intlMiddleware = createMiddleware(routing);


export default async function proxy(request: NextRequest){
  
  const pathName = request.nextUrl.pathname;

  // deklarasi URl dengan Path tertentu
  const isADmin = pathName.includes('/adminkelola');
  const isLogin = pathName.includes('/adminkelola/login');

  // Check if the path is for the admin panel
  if (isADmin && !isLogin) {
    // Here you can add your authentication logic, for example:
    const { data } = await supabase.auth.getUser();
    if (!data) {
      // If no user is found, redirect to the login page
      return NextResponse.redirect(new URL('/adminkelola/login', request.url));
    }
  }

  // For all other paths, use the intl middleware
  return intlMiddleware(request);
}
 
export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)'
};