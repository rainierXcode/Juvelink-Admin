'use client'
import { useAuth } from "@/hooks/useAuth"

export function AuthProvider({ children } : { children: React.ReactNode }){
    const { isLoading, isAuthenticated } = useAuth(true);

    if(isLoading) return <div>Loading...</div>

    if(!isAuthenticated) return null;

    return <>{ children }</>
}