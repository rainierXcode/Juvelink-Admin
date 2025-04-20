import { cn } from "@/lib/utils";

const variantClasses = {
    default: 'bg-gray-600 text-white hover:bg-gray-700',
    outline: 'border border-gray-300 text-gray-800 hover:bg-gray-100',
    ghost: 'bg-transparent hover:bg-gray-200/70 text-black'
} as const

const sizeClasses = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-1.5 text-base",
    lg: "px-5 py-3 text-lg",
} as const


type InputVariant = keyof typeof variantClasses;
type InputSize = keyof typeof sizeClasses;


type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    className?:string;
    variant?: InputVariant;
    size?: InputSize;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
}


export default function Button({
    className, 
    variant = 'default',
    size = 'md',
    leftIcon, 
    rightIcon, 
    children ,
    ...props

}: ButtonProps ){

    return (
        <button type="button" className={cn(
            "rounded-md font-medium transition-all disabled:opacity-50 flex justify-center items-center cursor-pointer", 
            sizeClasses[size],
            variantClasses[variant],
            className 
        )} 
        
            {...props}>
                {leftIcon && <span>{leftIcon}</span>}
                {children}
                {rightIcon && <span >{rightIcon}</span>}
        </button>
    )
}