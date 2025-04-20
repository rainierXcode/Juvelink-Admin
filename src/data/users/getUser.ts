"use server"

import { cache } from "react";
import { verifySession } from "@/lib/session";


export const getUser = cache(async (): Promise<{name: string,  userId: number; access_id: string; password_hash: string; role: string } | null> => {
    const session = await verifySession();

    if (!session?.userId) {
        return null; 
    }

    const user = {
        id: 1,
        name: 'Rainier',
        access_id: 'boy-girl-14',
        password_hash: '$2b$10$bttDRHRY53DzX578aCMBu.zr/AGkQwDlJV8P.rWfb.C5qHsF/q5Z.',
        role: 'super-admin'
    };

    return {
        name: user.name,
        userId: user.id,
        access_id: user.access_id,
        password_hash: user.password_hash,
        role: user.role
    };
});


