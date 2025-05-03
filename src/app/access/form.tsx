"use client"

import { Input } from "@/components/ui/Input"
import Button from "@/components/ui/Button"
import { useForm } from "react-hook-form"
import { loginSchema, LoginInput } from "@/schemas/auth.schema"
import { zodResolver } from '@hookform/resolvers/zod'
import  axiosInstance  from '@/lib/axios'
import { useState } from "react"
import { Loader1 } from "@/components/Loaders"
import { useRouter } from 'next/navigation';
import { TriangleAlert } from "lucide-react"

export default function LoginForm(){
    const [haveErrorNotice, setHaveErrorNotice] = useState< string >('');
    const router = useRouter();


    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm<LoginInput>({
        resolver: zodResolver(loginSchema),
    })

    const onSubmit = async ( data: LoginInput) =>{
        
        try{
            const response  = await axiosInstance.post('/auth/admin/login', data);
            const  result  = response.data
            
            if (!result.success) {
                throw new Error('Login failed: Invalid credentials'); 
            }
            setHaveErrorNotice('')
            router.push('/');
        }catch(error: unknown){
            setHaveErrorNotice(typeof error === 'string' ? error : 'Unknown error');
        }
    }

    return(
        <form className="w-[350px] relative" onSubmit={handleSubmit(onSubmit)}>
           {
            isSubmitting &&
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <Loader1 className="dark:text-blue-700"/>
            </div>
           }
           
            <div className="mb-8 text-2xl font-bold relative">
            
                Sign In
                { haveErrorNotice && 
                <div className="text-xs font-normal absolute -bottom-5 text-red-400 flex items-center gap-1">
                    <TriangleAlert size={12} />
                    { haveErrorNotice }
                </div> }
            </div>
            <div className="space-y-4">
                <Input  id="access_id"  {...register('access_id')} placeholder="Access ID" sizing="sm" error={errors.access_id?.message}/>
                <Input id="password" {...register('password')}  placeholder="Password" sizing="sm"  type="password" error={errors.password?.message}/>
            </div>
            <div className="flex items-center justify-end mt-3 mb-4">
                <div className="text-xs text-neutral-900/60">Forgot your password?</div>
            </div>
            <Button type="submit" disabled={isSubmitting} className="w-full uppercase bg-blue-800 hover:bg-blue-900 disabled:to-blue-300" size="md">CONTINUE</Button>
        </form>
    )
}

