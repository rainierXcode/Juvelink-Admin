import { type NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { decrypt } from "./lib/session";

export default async function middleware(req: NextRequest){
    
    const protectedRoutes = [
        '/', 
        '/juvenile-management', 
    ];

    const currentPath = req.nextUrl.pathname
    const isProtectedRoute = protectedRoutes.some((route) =>
        currentPath === route || currentPath.startsWith(`${route}/`)
      );


    if(isProtectedRoute){
        const cookieStore = await cookies();
        const cookie = cookieStore.get('session')?.value
        const session = cookie ? await decrypt(cookie) : null;

        if(!session?.userId){
            return NextResponse.redirect(new URL('/access', req.nextUrl))
        }
    }

    return NextResponse.next()
}


export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};