// https://authjs.dev/guides/upgrade-to-v5
// 
import NextAuth from "next-auth";
import authConfing from "@/auth.config"

const { auth } = NextAuth(authConfing)


export default auth((req) => {
    console.log('req.nextUrl: ', req.nextUrl);
    console.log('req.auth:', req.auth); 
    const { nextUrl } = req;
    const isLoggedIn = !!req.auth;
  
    const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
    const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
    const isAuthRoute = authRoutes.includes(nextUrl.pathname);
  
    if (isApiAuthRoute) {
      return null;
    }
  
    if (isAuthRoute) {
      if (isLoggedIn) {
        return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl))
      }
      return null;
    }
  
    if (!isLoggedIn && !isPublicRoute) {
      let callbackUrl = nextUrl.pathname;
      if (nextUrl.search) {
        callbackUrl += nextUrl.search;
      }
  
      const encodedCallbackUrl = encodeURIComponent(callbackUrl);
  
      return Response.redirect(new URL(
        `/auth/login?callbackUrl=${encodedCallbackUrl}`,
        nextUrl
      ));
    }

    return null;
    // if (!req.auth)
    //     return NextResponse.redirect(new URL('/auth/signin', req.url));

 
    // 
    // if (req.nextUrl.pathname.startsWith('/dashboard')) {
    //     if (req.auth.user.role !== 'USER') {
    //         return NextResponse.redirect(new URL('/dashboard', req.url));
    //     }
    // }

    // if (req.auth && req.auth.user.role === 'ADMIN')
    //     return Response.redirect(req.nextUrl.origin + '/admin')


    // if (req.auth && req.auth.user.role === 'USER')
    //     return Response.redirect(req.nextUrl.origin + '/dashboard')


})


// Comprobar regular expressions: 
// https://es.wikipedia.org/wiki/Expresi%C3%B3n_regular
// https://regex101.com
export const config = {
    matcher: [
        '/',
        '/about',
        '/(dashboard)(.*)', 
        '/(admin)(.*)',
        '/(api)(.*)',
        '/(auth)(.*)'
    ]
};