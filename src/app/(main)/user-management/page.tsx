"use client"
import { useState } from "react"
import { Input } from "@/components/ui/Input"
import { DropdownMenu, DropdownContent, DropdownTrigger } from "@/components/ui/Dropdown"
import Stepper from "@/components/ui/Stepper"
import Button from "@/components/ui/Button"
import { ChevronRight, ChevronLeft } from "lucide-react"

export default function UserManagement(){
     const [currentStep, setCurrentStep] = useState<number>(1);
    
    const steps = ['General Information', 'Security', 'Overview']

    const prevStep = () => {
        setCurrentStep((prev) => prev - 1)
    }


    const nextStep = () => {
        setCurrentStep((prev) => prev + 1)
    }

  
    const stepDetails = () => {
        switch (currentStep) {
            case 1:
                return <GeneralInformation />  

            case 2:
                return <Security />  

            case 3: 
                return <Overview />

            default:
                break;
        }
    }


    return (
        <div className="flex flex-col min-h-screen px-8 py-4 font-poppins">
            <div className="font-semibold text-lg">Create User</div>

            <div className="border border-[#5C7199]/40 rounded-md px-32  box-border mt-8 py-4 flex items-center">
                <Stepper currentStep={currentStep} steps={steps}/>
            </div>

        
          
            <div className="border border-[#5C7199]/40 rounded-md box-border px-4 py-4 mt-8 flex-col flex flex-1">
                {
                    stepDetails()
                }
                <div className="flex-1 flex items-end justify-end gap-4">
                    <Button size="sm" className=" gap-1" onClick={prevStep}>
                        <ChevronLeft size={16}/>
                        Next
                    </Button>
                    <Button size="sm" className="bg-[#2E3191] hover:bg-blue-700 gap-1" onClick={nextStep}>
                        Next
                        <ChevronRight size={16}/>
                    </Button>
                </div>
            </div>

               
          

        </div>
    )
}

function GeneralInformation(){
    return (
        <div className="space-y-4 flex flex-col w-full">
            <Input sizing='md' name="first_name" placeholder="First Name" className=""/>
            <Input sizing='md' name="middle_name" placeholder="Middle Name" className=""/>
            <Input sizing='md' name="last_name" placeholder="Last Name" className=""/>
            <DropdownMenu>
                <DropdownTrigger>
                    <div className="border font-poppins border-gray-300/80 rounded-sm font-normal py-0.5 text-gray-400 px-4">Role</div>
                </DropdownTrigger>

                <DropdownContent variant="pop" className="w-full border-gray-300/80 [&>div]:cursor-pointer [&>div]:hover:bg-gray-100">
                    <div className="px-4 py-1 text-sm text-neutral-900/85">Admin</div>
                    <div className="px-4 py-1 text-sm text-neutral-900/85">Social Worker</div>
                    <div className="px-4 py-1 text-sm text-neutral-900/85">Parents</div>
                </DropdownContent>
            </DropdownMenu>
        </div>  
    )
}

function Security(){
    return (
        <div></div>
    )
}

function Overview(){
    return (
        <div></div>
    )
}