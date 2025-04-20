'use server'

import { deleteSession } from "@/lib/session"

export async function logout(){
    return deleteSession();
}