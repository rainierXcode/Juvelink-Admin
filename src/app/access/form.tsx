"use client"

import { useActionState } from "react"
import { Input } from "@/components/ui/Input"
import Button from "@/components/ui/Button"
import { login } from "../../action/auth_action"

export default function LoginForm(){
    const [state, formAction] =useActionState(login, {});

    return(
        <form className="w-[350px]" action={formAction}>
            <div className="mb-8 text-2xl font-bold">Sign In</div>
            <div className="space-y-4">
                <Input name='access_id' placeholder="Access ID" sizing="sm"error={state?.error?.access_id && state.error.access_id[0]}/>
                <Input name='password' placeholder="Password" sizing="sm"  type="password" error={state?.error?.password && state.error.password[0]}/>
            </div>
            <div className="flex items-center justify-end mt-3 mb-4">
                <div className="text-xs text-neutral-900/60">Forgot your password?</div>
            </div>
            <Button type="submit" className="w-full uppercase bg-blue-800 hover:bg-blue-900" size="md">CONTINUE</Button>
        </form>
    )
}

