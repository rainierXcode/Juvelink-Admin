import { useEffect, useCallback, useState} from "react";
import axiosInstance from "@/lib/axios";
import { useRouter } from 'next/navigation';

const AUTH_ERRORS = {
    INVALID: 'Your session is invalid. Please log in again.',
    SESSION_EXPIRED: 'Your session has expired. Please log in again.',
    
  } as const;
  
type AuthState = 'loading' | 'authenticated' | 'unauthenticated' | 'session-expired';

export function useAuth(redirectOnError = false){
    const router = useRouter();
    const [state, setState] = useState<AuthState>('loading');

    const verifySession = useCallback(async () => {
        let mounted = true;
        
        try {
            await axiosInstance.get('/auth/admin/verify');
            setState('authenticated')
        } catch (error) {
            const err = typeof error === 'string' ? error : 'Unknown error';

           if(mounted  && err === AUTH_ERRORS.INVALID){
                setState('unauthenticated')
                
                if(redirectOnError){
                    router.push('/access')
                }
           }

           if(mounted  && err === AUTH_ERRORS.SESSION_EXPIRED){
            setState('session-expired')
            
                if(redirectOnError){
                    router.push('/access')
                }
            }
            
            return () => { mounted = false; };
        }
    }, [redirectOnError, router])

    useEffect(() => {
        verifySession()
    }, [router, redirectOnError, verifySession])

    
    return {
        isLoading: state === 'loading',
        isAuthenticated: state === 'authenticated',
        isSessionExpired: state === 'session-expired',
        state
    };
    
}


