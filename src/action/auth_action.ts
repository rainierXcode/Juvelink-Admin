"use server"

import { loginSchema } from "@/app/access/access_definition"
import { createSession } from "@/lib/session"
import bcrypt from "bcrypt";

type LoginState = {
    error?: Record<string, string[]>;
    success?: boolean;
}

export async function login( 
    prevState: LoginState,
    formData: FormData
) : Promise<LoginState> {
    const raw = {
        access_id: formData.get('access_id'),
        password: formData.get('password'),
    }

    const parsed = loginSchema.safeParse(raw);

    if(!parsed.success){
        return { error: parsed.error.flatten().fieldErrors };
    }

    const {  password } = parsed.data;

   
    const temp_data = [{id: 1, access_id: 'boy-girl-14' , password_hash: '$2b$10$bttDRHRY53DzX578aCMBu.zr/AGkQwDlJV8P.rWfb.C5qHsF/q5Z.'}]

    const user = temp_data[0]

    if(!user){
        return { error: { password: ['Wrong credentials']} }
    }

    const passwordMatch = await bcrypt.compare(password, user.password_hash )

    if (!passwordMatch) {
        return { error: { password: ['Wrong Credentials'] } };
    }

    await createSession(String(user.id))

    return { success: true };
}