import 'server-only'

import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const secret = process.env.SECRET;
if (!secret) throw new Error("SECRET env variable is not defined");
const key = new TextEncoder().encode(secret)

const cookie  = {
    name: 'session',
    options: { httpOnly: true, secure: true, sameSite: 'lax' , path: '/' } as const,
    duration: 24 * 60 * 60 * 1000
}

export async function encrypt(payload: Record<string, unknown>) : Promise<string> {
    return new SignJWT(payload)
    .setProtectedHeader( {alg: 'HS256'} )
    .setIssuedAt()
    .setExpirationTime('1day')
    .sign(key)
}

export async function decrypt(session : string) : Promise<Record<string, unknown> | null> {
    try{
        const { payload } = await jwtVerify(session, key, {
            algorithms: ['HS256'],
        })

        return payload
    }catch {
        return null
    }
}


export async function createSession(userId: string) {
    const cookieStore = await cookies(); 

    const expires = new Date(Date.now() + cookie.duration);
    const session = await encrypt({ userId, expires });
  
   
    cookieStore.set(
        cookie.name,
        session,{
            ...cookie.options,
            expires
        }
    );

    redirect('/');
  }

export async function verifySession() {
    const cookieStore = await cookies(); 
    const cookieValue = cookieStore.get('session')?.value; 

    if(!cookieValue){
        return null
    }

    const session = await decrypt(cookieValue)

    if(!session?.userId){
        redirect('/access')
    }

    return { userId: session.userId }
}

export async function deleteSession() {
    const cookieStore = await cookies();

    cookieStore.delete(cookie.name)

    redirect('/access')
}