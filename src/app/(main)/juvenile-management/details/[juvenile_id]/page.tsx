import Button from "@/components/ui/Button"
import { CornerDownLeft, CalendarFold } from "lucide-react"
import Image from "next/image"
import Jeremy from '@/assets/images/jeremy.jpg'
import Link from "next/link"

export default function Juvenile_Info(){
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
                        {/* <div className="w-16 h-16 bg-gray-200 rounded-full"></div> */}
                        <Image src={Jeremy} alt="jeremy" width={64} height={64} className="rounded-full"/>
                    </div>

                    <div className="grid grid-cols-2 gap-x-4 gap-y-2 w-96 text-neutral-900">
                       <div className="text-sm">
                            <div className="text-xs mb-1 text-neutral-700">Given Name</div>
                            <div className="border border-neutral-900/50 rounded-sm px-2 py-0.5 text-neutral-900/85">Jeremy</div>
                       </div>

                       <div className="text-sm">
                            <div className="text-xs mb-1 text-neutral-700">Middle Name</div>
                            <div className="border border-neutral-900/50 rounded-sm px-2 py-0.5 text-neutral-900/85">Galang</div>
                       </div>

                       <div className="text-sm">
                            <div className="text-xs mb-1 text-neutral-700">Last Name</div>
                            <div className="border border-neutral-900/50 rounded-sm px-2 py-0.5 text-neutral-900/85">Galang</div>
                       </div>

                       <div className="text-sm">
                            <div className="text-xs mb-1 text-neutral-700">Nick Name</div>
                            <div className="border border-neutral-900/50 rounded-sm px-2 py-0.5 text-neutral-900/85">Paps</div>
                       </div>

                    </div>
                </div>
            </div>

            <div className="border border-[#5C7199]/40 rounded-sm mt-4 p-4">
                <div className="grid grid-cols-2 gap-4">
                    <div className="border border-neutral-900/50 rounded-sm p-4 space-y-2 font-geist text-xs">
                        <div>
                            <span className="text-neutral-700">Case: </span>
                            <span>Robbery</span>
                        </div>

                        <div>
                            <span className="text-neutral-700"> Date of case: </span>
                            <span>Robbery</span>
                        </div>

                        <div>
                            <span className="text-neutral-700"> Date of hearing: </span>
                            <span>Robbery</span>
                        </div>

                        <div>
                            <span className="text-neutral-700"> Date of hearing: </span>
                            <span>Defense</span>
                        </div>

                        <div>
                            <span className="text-neutral-700"> Date of hearing: </span>
                            <span> Status </span>
                        </div>

                    </div>

                    <div className=" grid grid-cols-2 gap-4">
                        
                        <div className="text-sm">
                            <div className="text-xs mb-1 text-neutral-700">Date of Birth</div>
                            <div className="border border-neutral-900/50 rounded-sm px-2 py-0.5 text-neutral-900/85 flex gap-1.5 items-center"> <CalendarFold size={14}/> John</div>
                       </div>

                       <div className="text-sm">
                            <div className="text-xs mb-1 text-neutral-700">Place of Birth</div>
                            <div className="border border-neutral-900/50 rounded-sm px-2 py-0.5 text-neutral-900/85">John</div>
                       </div>

                       <div className="text-sm">
                            <div className="text-xs mb-1 text-neutral-700">Gender</div>
                            <div className="border border-neutral-900/50 rounded-sm px-2 py-0.5 text-neutral-900/85">John</div>
                       </div>

                       <div className="text-sm">
                            <div className="text-xs mb-1 text-neutral-700">Age</div>
                            <div className="border border-neutral-900/50 rounded-sm px-2 py-0.5 text-neutral-900/85">John</div>
                       </div>

                       <div className="text-sm">
                            <div className="text-xs mb-1 text-neutral-700">Nationality</div>
                            <div className="border border-neutral-900/50 rounded-sm px-2 py-0.5 text-neutral-900/85">John</div>
                       </div>

                       <div className="text-sm">
                            <div className="text-xs mb-1 text-neutral-700">Religion</div>
                            <div className="border border-neutral-900/50 rounded-sm px-2 py-0.5 text-neutral-900/85">John</div>
                       </div>
                    </div>
                </div>

                <div>
                    <div className="text-sm font-semibold mt-8 mb-2">Parent/Guardian Information</div>
                    <div className=" grid grid-cols-3 gap-4">
                        <div className="text-sm">
                            <div className="text-xs mb-1 text-neutral-700">Parent/Guardian:</div>
                            <div className="border border-neutral-900/50 rounded-sm px-2 py-0.5 text-neutral-900/85"> Name of Parent/Guardian </div>
                        </div>

                        <div className="text-sm">
                            <div className="text-xs mb-1 text-neutral-700">Address:</div>
                            <div className="border border-neutral-900/50 rounded-sm px-2 py-0.5 text-neutral-900/85">John</div>
                        </div>

                        <div className="text-sm">
                            <div className="text-xs mb-1 text-neutral-700">Email: </div>
                            <div className="border border-neutral-900/50 rounded-sm px-2 py-0.5 text-neutral-900/85">Phone Number</div>
                        </div>     
                        
                        <div className="text-sm">
                            <div className="text-xs mb-1 text-neutral-700">Phone:</div>
                            <div className="border border-neutral-900/50 rounded-sm px-2 py-0.5 text-neutral-900/85">Phone Number</div>
                        </div>           
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-8">
                    <div className="border border-neutral-900/50 rounded-sm p-4 space-y-2 font-geist text-xs">
                        <div>
                            <span className="text-neutral-700"> Custody Arrangement: </span>
                            <span>Robbery</span>
                        </div>

                        <div>
                            <span className="text-neutral-700"> Foster Care Status: </span>
                            <span>Robbery</span>
                        </div>

                        <div>
                            <span className="text-neutral-700"> Probation Status: </span>
                            <span>Robbery</span>
                        </div>

                        <div>
                            <span className="text-neutral-700"> Assign Judge: </span>
                            <span>Defense</span>
                        </div>

                        <div>
                            <span className="text-neutral-700"> Attorney: </span>
                            <span> Status </span>
                        </div>

                        <div>
                            <span className="text-neutral-700"> Attorney: </span>
                            <span> Progress: </span>
                        </div>

                    </div>

                    <div className="grid-cols-2 grid gap-4">
                        <div className="text-sm">
                            <div className="text-xs mb-1 text-neutral-700"> Case Worker Name </div>
                            <div className="border border-neutral-900/50 rounded-sm px-2 py-0.5 text-neutral-900/85">Phone Number</div>
                        </div>    

                        <div className="text-sm">
                            <div className="text-xs mb-1 text-neutral-700"> Case Worker Contact </div>
                            <div className="border border-neutral-900/50 rounded-sm px-2 py-0.5 text-neutral-900/85">Phone Number</div>
                        </div>      
                    </div>
                </div>
            </div>
        </div>
    )
}   