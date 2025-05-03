"use client"
import Button from "@/components/ui/Button"
import { CornerDownLeft, CalendarFold } from "lucide-react"
import Image from "next/image"
import Jeremy from '@/assets/images/jeremy.jpg'
import Link from "next/link"
import Calendar from "@/components/ui/Calendar"
import { Input } from "@/components/ui/Input"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/Popover"

export default function Juvenile_Edit(){
    return(
        <div className="flex flex-col min-h-screen px-8 pt-4 font-poppins">
            <div className="bg-[#DFDFDF]/35 px-4 py-4 rounded-sm">
                <div className="flex items-center justify-between">
                    <Link href={'/juvenile-management'}>
                        <Button size="sm" className="text-xs gap-1 bg-white text-black hover:text-white">
                            <CornerDownLeft size={14}/>
                            Back
                        </Button>
                    </Link>
                    <div className="gap-4 font-semibold text-sm text-[#2E3191]">Juvenile Information</div>
                </div>

                <div className=" flex items-center px-6 gap-8 mt-6">
                    <div>
                        <Image src={Jeremy} alt="jeremy" width={64} height={64} className="rounded-full"/>
                    </div>

                    <div className="grid grid-cols-2 gap-x-4 gap-y-2 w-96 text-neutral-900">
                       <div className="text-sm">
                            <Input name="first_name" className="bg-transparent text-gray-700 placeholder:text-xs" sizing="sm" placeholder="Given Name"/>
                       </div>

                       <div className="text-sm">
                            <Input name="middle_name" className="bg-transparent text-gray-700 placeholder:text-xs" sizing="sm" placeholder="Middle Name"/>
                       </div>

                       <div className="text-sm">
                            <Input name="last_name" className="bg-transparent text-gray-700 placeholder:text-xs" sizing="sm" placeholder="Last Name"/>
                       </div>

                       <div className="text-sm">
                            <Input name="nick_name" className="bg-transparent text-gray-700 placeholder:text-xs" sizing="sm" placeholder="Yami"/>
                       </div>

                    </div>
                </div>
            </div>

            <div className="border border-[#5C7199]/40 rounded-sm mt-4 p-4">
                <div className="grid grid-cols-2 gap-8">
                    <div className="border border-neutral-900/50 rounded-sm p-4 space-y-2 font-geist text-xs">
                        <div className="flex items-center gap-2">
                            <span className="text-neutral-700">Case: </span>
                            <Input sizing="xs"/>
                        </div>

                        <div className="flex items-center gap-2">
                            <div className="text-neutral-700"> Date of case: </div>
                             <Input sizing="xs"/>
                        </div>

                        <div className="flex items-center gap-2">
                            <span className="text-neutral-700"> Date of hearing: </span>
                            <Input sizing="xs"/>
                        </div>

                        <div className="flex items-center gap-2">
                            <span className="text-neutral-700"> Date of hearing: </span>
                            <Input sizing="xs"/>
                        </div>

                        <div className="flex items-center gap-2">
                            <span className="text-neutral-700"> Date of hearing: </span>
                            <Input sizing="xs"/>
                        </div>

                    </div>

                    <div className=" grid grid-cols-2 gap-4">
                        
                        <div className="text-sm">
                            <Popover >
                                <PopoverTrigger>
                                    <div className="border border-neutral-900/50 rounded-sm px-2 py-0.5 text-neutral-900/85 flex gap-1.5 items-center"> <CalendarFold size={14}/> John</div>
                                </PopoverTrigger>
                                <PopoverContent className="left-1/2 -translate-x-1/2 w-72"> 
                                    <Calendar />
                                </PopoverContent>
                            </Popover>
                       </div>

                       <div className="text-sm">
                            <Input name="place_birth" className="bg-transparent text-gray-700 placeholder:text-xs" sizing="sm" placeholder="Place of Birth"/>
                       </div>

                       <div className="text-sm">
                            <Input name="gender" className="bg-transparent text-gray-700 placeholder:text-xs" sizing="sm" placeholder="Gender"/>
                       </div>

                       <div className="text-sm">
                            <Input name="age" className="bg-transparent text-gray-700 placeholder:text-xs" sizing="sm" placeholder="Age"/>
                       </div>

                       <div className="text-sm">
                            <Input name="nationality" className="bg-transparent text-gray-700 placeholder:text-xs" sizing="sm" placeholder="Nationality"/>
                       </div>

                       <div className="text-sm">
                            <Input name="religion" className="bg-transparent text-gray-700 placeholder:text-xs" sizing="sm" placeholder="Religion"/>
                       </div>
                    </div>
                </div>

                <div>
                    <div className="text-sm font-semibold mt-8 mb-2">Parent/Guardian Information</div>
                    <div className=" grid grid-cols-3 gap-4">
                        <div className="text-sm">
                            <Input name="parent_name" className="bg-transparent text-gray-700 placeholder:text-xs" sizing="sm" placeholder="Parent/Guardian"/>
                        </div>

                        <div className="text-sm">
                            <Input name="parent_address" className="bg-transparent text-gray-700 placeholder:text-xs" sizing="sm" placeholder="Address"/>
                        </div>

                        <div className="text-sm">
                            <Input name="parent_email" className="bg-transparent text-gray-700 placeholder:text-xs" sizing="sm" placeholder="Email"/>
                        </div>     
                        
                        <div className="text-sm">
                            <Input name="parent_phone" className="bg-transparent text-gray-700 placeholder:text-xs" sizing="sm" placeholder="Phone"/>
                        </div>           
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-8">
                    <div className="border border-neutral-900/50 rounded-sm p-4 space-y-2 font-geist text-xs">
                
                        <div className="flex items-center gap-2">
                            <span className="text-neutral-700"> Custody Arrangement: </span>
                            <Input sizing="xs"/>
                        </div>

                        <div className="flex items-center gap-2">
                            <span className="text-neutral-700"> Foster Care Status: </span>
                            <Input sizing="xs"/>
                        </div>

                        <div className="flex items-center gap-2">
                            <span className="text-neutral-700"> Probation Status: </span>
                            <Input sizing="xs"/>
                        </div>

                        <div className="flex items-center gap-2">
                            <span className="text-neutral-700"> Assign Judge: </span>
                            <Input sizing="xs"/>
                        </div>

                
                        <div className="flex items-center gap-2">
                            <span className="text-neutral-700"> Attorney: </span>
                            <Input sizing="xs"/>
                        </div>

                        <div className="flex items-center gap-2">
                            <span className="text-neutral-700"> Progress </span>
                            <Input sizing="xs"/>
                        </div>

                    </div>

                    <div className="grid-cols-2 grid gap-4">
                        <div className="text-sm">
                            <Input name="caseworker_name" className="bg-transparent text-gray-700 placeholder:text-xs" sizing="sm" placeholder="Case Worker Name"/>
                        </div>    

                        <div className="text-sm">
                            <Input name="caseworker_phone" className="bg-transparent text-gray-700 placeholder:text-xs" sizing="sm" placeholder="Case Worker Contact"/>
                        </div>      
                    </div>
                </div>

               <div className="mt-12 flex justify-end">
                    <Button className="bg-[#2E3191] px-4 py-1 text-sm">
                            Edit Info
                    </Button>
               </div>
            </div>
        </div>
    )
}   