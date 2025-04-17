"use client"
import { cn } from "@/lib/utils";
import Image from "next/image";
import { LayoutDashboard, SquareGanttChart, Container, User} from "lucide-react"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const items = [
    {
      title: "Dashboard",
      url: "/",
      icon: LayoutDashboard,
    },
    {
      title: "Juvnile Management",
      url: "/juvenile-management",
      icon: SquareGanttChart,
    },
    {
      title: "Inventory",
      url: "inventory-management",
      icon: Container,
    },
    {
      title: "Staff",
      url: "#",
      icon: User
    },
    
  ]

export default function Sidebar({
} ){

    const pathname = usePathname();

    return (
        <div className={cn(
            "fixed left-0 top-0 h-screen w-72  text-white  z-50 p-4 border",
        )}>
            <aside className="bg-indigo-900 drop-shadow-[0_2px_15px_rgba(46,49,145,0.5)] w-full h-full rounded-md px-6">
                <header className="py-8  flex justify-center items-center gap-2">
                    <Image src='logo.svg' alt="rrcy_logo" width={24} height={24} className="flex-1 w-auto h-auto"></Image>
                    <div className="font-jost font-semibold">
                        <div className="text-[10px]">AYALA MAGALANG PAMPANGA</div>
                        <div className="text-[7px]">REGIONAL REHABILITATION CENTER FOR YOUTH</div>
                    </div>
                </header>  

                <section className="py-4 flex flex-col gap-4 ">
                   {
                    items.map((item, index) => (
                        <Link href={item.url} key={index}>
                          <motion.div  
                          key={pathname}
                          initial={pathname === item.url ? { opacity: 0 } : {}}
                          animate={pathname === item.url ? { opacity: 1 } : {}}
                          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                          className={`w-full py-2 px-2 flex items-center  justify-start  gap-2 hover:bg-transparent text-xs 
                            ${pathname === item.url && 'border-white rounded-md border'}`}>
                                <motion.span
                                 key={pathname}
                                 initial={pathname === item.url ? { scale: 0.5 } : {}}
                                 animate={pathname === item.url ? { scale: 1 } : {}}
                                 transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                                >{<item.icon size={16}/>}</motion.span>
                                <span>{item.title}</span>
                          </motion.div>
                        </Link>    
                    ))
                   }
                </section> 
            </aside>
        </div>
    )
}