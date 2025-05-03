"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

type StepperProps = {
    currentStep: number,
    steps: string[]
}

export default function Stepper ({
    currentStep = 1,
    steps = [],
} : StepperProps ){

    return(
        <div className="text-xs flex items-center justify-center w-full mb-[24px]">
            {
                steps.map((step, index) => {
                    const isCompleted = index < currentStep - 1;
                    const isActive = index === currentStep - 1;

                    return(
                        <div className="not-last:flex-1 flex items-center relative" key={index}>
                            <div className="relative">
                                <div className={`rounded-full ${isActive || isCompleted ? 'bg-blue-500' : 'bg-gray-300'} w-5 h-5 flex justify-center items-center text-white font-semibold`}>
                                    {
                                        isCompleted ? 
                                        <motion.span initial={{scale: 0.9}} animate={{scale: 1}}>
                                            <Check size={14}/>
                                        </motion.span>
                                        : 
                                        ( index + 1 )
                                    }
                                </div>
                                <div className="absolute -translate-x-1/2 left-1/2 w-max mt-2.5">{step}</div>
                            </div>
                            <div className={`h-1 rounded-sm bg-gray-300 flex-1 mx-2 relative`}>
                                <motion.div 
                                    initial={false}
                                    animate={{ width: isCompleted ? '100%' : '0%' }}
                                    transition={{ duration: 0.7, ease: 'easeInOut' }}
                                    className="absolute h-full bg-blue-500 rounded-[inherit]"
                                />
                             </div>

                        </div>
                    )
                })
            }
        </div>
    )
}