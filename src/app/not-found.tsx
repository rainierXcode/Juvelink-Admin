"use client"
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function NotFoundPage() {
    const router = useRouter();
    return (
        <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{ease: 'easeIn'}}
         className="h-screen flex justify-center items-center font-poppins flex-col bg-[#E9E9E9]">
            <div className=" font-bold text-9xl relative">
                <span className="text-[#00B271]">404</span>
                <span className="text-[#008453] -translate-y-1 absolute top-0 left-0">404</span>
            </div>

            <div className="font-medium mt-5 text-black/80 text-xl">Oops, This Page Not Found!</div>
            <div className="text-black/70 mt-2">The link might be corrupted or the page may have been removed</div>
            
            <Button 
            onClick={() => router.push('/')}
            className="mt-6 bg-black" size="md"> GO BACK HOME</Button>
        </motion.div>
    )
}
