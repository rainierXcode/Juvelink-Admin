import Image from "next/image"
import SignInBG1 from '@/assets/bg/signInBG1.svg'
import SignInBG2 from '@/assets/bg/signInBG2.svg'
import SignInForm from "./SignInForm"

export default function LoginPage(){
    return (
        <div className="flex h-screen font-poppins">
            <div className="col-span-4 relative bg-red-400 w-[500px] flex items-center justify-center" style={{background: 'linear-gradient(180deg, rgba(94, 99, 255, 0.8) 0%, rgba(0, 0, 130, 0.8) 100%)'}}>
                <Image src={SignInBG1} alt="loginsvg1" width={100} height={100} className="absolute top-0 w-full h-auto"/>
                <Image src={SignInBG2} alt="loginsvg2" width={100} height={100} className="absolute bottom-0 w-full h-auto"/>
                <header className="flex items-center justify-center py-12 text-white gap-x-2.5 absolute left-1/2 top-0 -translate-x-1/2 w-full">
                        <Image src='logo.svg' alt="rrcy_logo" width={36} height={36} ></Image>
                        <div className="font-semibold font-jost">
                            <div className="text-lg">AYALA MAGALANG PAMPANGA</div>
                            <div className="text-xs">REGIONAL REHABILITATION CENTER FOR YOUTH</div>
                        </div>
                </header> 

                <div className="text-white">
                    <div className="text-4xl font-bold">WELCOME ADMIN</div>   
                    <div className="text-sm font-light">Sign in to continue access</div> 
                </div> 
            </div>
            <div className="flex flex-col items-center justify-center flex-1">
                <SignInForm />
            </div>  
        </div>
    )
}