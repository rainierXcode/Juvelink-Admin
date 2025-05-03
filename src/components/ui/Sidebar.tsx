"use client"
import { cn } from "@/lib/utils";
import Image from "next/image";
import { LayoutDashboard, SquareGanttChart, Container, User, CircleUser, UserPlus, CircleArrowOutUpLeft} from "lucide-react"
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import axiosInstance from "@/lib/axios";

export default function Sidebar({
} ){

    const pathname = usePathname();
    const router = useRouter()

    const handleLogout = async () => {
      try{
        const response  = await axiosInstance.get('/auth/admin/logout');
        const result = response.data

        if(result.success){
          router.push('/access')
        }
      }catch{

      }
    }

  const routeItems = [
    [
      {
        title: "Dashboard",
        url: "/",
        icon: LayoutDashboard,
      },
      {
        title: "Juvinile Management",
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
        url: "staff_information",
        icon: User
      },
  
      {
        title: "User Management",
        url: "/user-management",
        icon: UserPlus,
      },
    ],

    [
      {
        title: "My Account",
        url: "/my-account",
        icon: CircleUser,
      },

      {
        title: "Log Out",
        onClick: handleLogout,
        icon: CircleArrowOutUpLeft
      }

    ]
  ]

    return (
        <div className={cn(
            "fixed left-0 top-0 h-screen w-72  text-white  z-50 py-4 pl-4 border",
        )}>
            <aside className="bg-indigo-900 drop-shadow-[0_2px_13px_rgba(46,49,145,0.4)] w-full h-full rounded-md px-6">
                <header className="flex items-center justify-center py-8 gap-x-2">
                    <Image src='/logo.svg' alt="rrcy_logo" width={32} height={32} ></Image>
                    <div className="font-semibold font-jost">
                        <div className="text-[11px]">AYALA MAGALANG PAMPANGA</div>
                        <div className="text-[7px]">REGIONAL REHABILITATION CENTER FOR YOUTH</div>
                    </div>
                </header>  

              <div className="flex flex-col divide-y divide-white/60">
              {
                  routeItems.map((sectionItem, index) => (
                    <section key={index} className="flex flex-col gap-4 py-6">
                      {
                        sectionItem.map((item) => {
                          if(item.url){
                            return (
                              <Link href={item.url} key={item.title}>
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
                            )
                          }else{
                            return(
                              <button
                              key={item.title}
                              onClick={item.onClick}
                              className="w-full py-2 px-2 flex items-center justify-start gap-2 hover:bg-transparent text-xs text-left cursor-pointer"
                            >
                              <item.icon size={16} className="rotate-[315deg]"/>
                              <span>{item.title}</span>
                            </button>
                            )
                          }
                        })
                      }
                    </section>
                  ))
                }
              </div>

           
            </aside>
        </div>
    )
}