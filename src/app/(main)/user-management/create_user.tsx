"use client"
import { useState } from "react"
import { Input } from "@/components/ui/Input"
import { DropdownMenu, DropdownContent, DropdownTrigger } from "@/components/ui/Dropdown"
import Stepper from "@/components/ui/Stepper"
import Button from "@/components/ui/Button"
import { ChevronRight, ChevronLeft } from "lucide-react"
import { ModalWrapper } from "@/components/ui/ModalWrapper"
import { X } from "lucide-react"
import { createUserSchema, CreateUserInput } from "@/schemas/create-user.schema"
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

type CreateUserModalProps  = {
    onClose: () => void;
}

export default function CreateUserModal({
    onClose
} : CreateUserModalProps ){
    const [currentStep, setCurrentStep] = useState<number>(1);
    const roleOptions = createUserSchema.innerType().shape.role.options;

    const steps = [
        {
            id: 1,
            title: 'General Information',
            fields: ['first_name', 'last_name', 'role']
        },
        {
            id: 2,
            title: 'Security',
            fields: ['password', 'confirm_password']
        },
        {
            id: 3,
            title: 'Overview',
            fields: []
        }
    ]

    const {
        register,
        handleSubmit,
        trigger,
        watch,
        control,
        formState: { errors, isSubmitting }
    } = useForm<CreateUserInput>({
        resolver: zodResolver(createUserSchema)
    })

    const handleNext = async () => {
       const fields = steps[currentStep - 1]?.fields || [];
       const isValid = await trigger(fields as (keyof CreateUserInput)[], { shouldFocus: true })

    
       if (!isValid) return null;
        
       if (currentStep === steps.length) return;

       nextStep()
    }

    const onSubmit = async (data: CreateUserInput) => {
        alert('Submitted')  
    }

    const prevStep = () => {
        setCurrentStep((prev) => Math.max(prev - 1, 1));
    }

    const nextStep = () => {
        setCurrentStep((prev) => Math.min(prev + 1, steps.length));
    }


    return (
        <ModalWrapper>
            <div className="flex flex-col min-h-[85vh] px-8 py-4 font-poppins z-50 bg-white w-[1000px] relative rounded-md">
                <Button variant="ghost" className="rounded-full absolute top-1.5 right-1.5 p-1 text-neutral-500" onClick={onClose}>
                        <X size={16}/>
                </Button>
                <div className="font-semibold text-lg">Create User</div>

                <div className="border border-[#5C7199]/40 rounded-md px-32  box-border mt-8 py-4 flex items-center">
                    <Stepper currentStep={currentStep} steps={steps.map(step => step.title)}/>
                </div>

                <form
                onSubmit={handleSubmit(onSubmit)}
                className="border border-[#5C7199]/40 rounded-md box-border px-4 py-4 mt-8 flex-col flex flex-1">
                    {
                        currentStep === 1  && (
                            <div className="space-y-4 flex flex-col w-full">
                                <Input sizing='md' {...register('first_name')}  error={errors.first_name?.message}  placeholder="First Name" className=""/>
                                <Input sizing='md' {...register('last_name')}  error={errors.last_name?.message}  name="last_name" placeholder="Last Name" className=""/>
                                <Controller
                                name="role"
                                control={control}
                                render={({ field }) => (
                                    <DropdownMenu>
                                    <DropdownTrigger withChevron={true}>
                                        <div className="border font-poppins border-gray-300/80 rounded-sm font-normal py-0.5 text-gray-400 px-4 capitalize">{ field.value || 'Role' }</div>
                                    </DropdownTrigger>
                    
                                    <DropdownContent variant="pop" className="w-full border-gray-300/80 [&>div]:cursor-pointer [&>div]:hover:bg-gray-100">
                                        {
                                            roleOptions.map((roleOption) => (
                                                <div key={roleOption}  onClick={() => field.onChange(roleOption)} 
                                                    className={`px-4 py-1 text-sm text-neutral-900/85 capitalize ${
                                                    field.value === roleOption ? "bg-gray-100 font-medium" : ""
                                                  }`}
                                                >
                                                    {roleOption}
                                                </div>
                                            ))
                                        }
                                    </DropdownContent>
                                    { errors.role &&  <div className="mt-1 ml-3 text-xs font-light text-red-500">{errors.role.message}</div>  }
                                </DropdownMenu>
                                )}
                                />
                            </div>  
                        )
                    }

                    {
                        currentStep === 2 && (
                            <div className="space-y-4 flex flex-col w-full">
                                <Input sizing='md' type="password" {...register('password')}  error={errors.password?.message}  placeholder="Password" className=""/>
                                <Input sizing='md' type="password" {...register('confirm_password')}  error={errors.confirm_password?.message}  placeholder="Confirm Password" className=""/>
                            </div>
                        )
                    }

                    {
                        currentStep === 3 && (
                            <div>
                                <div>First name: <span>{watch('first_name')}</span></div>
                                <div>Last name: <span>{watch('last_name')}</span></div>
                            </div>
                        )
                    }

                    <div className="flex-1 flex items-end justify-end gap-4">
                        <Button type="button" disabled={currentStep === 1} size="sm" className=" gap-1" onClick={prevStep}>
                            <ChevronLeft size={16}/>
                            Prev
                        </Button>

                        <Button
                        key={currentStep === steps.length ? "submit" : "next"}
                        type={currentStep === steps.length ? "submit" : "button"}
                        size="sm"
                        className={
                            currentStep === steps.length
                            ? "bg-emerald-600 hover:bg-emerald-700 gap-1"
                            : "bg-[#2E3191] hover:bg-blue-700 gap-1"
                        }
                        onClick={currentStep === steps.length ? undefined : handleNext}
                        >
                            <ChevronRight size={16} />
                            {currentStep === steps.length ? "Submit" : "Next"}
                        </Button>
                    </div>
                </form>
            </div>
        </ModalWrapper>
    )
}

