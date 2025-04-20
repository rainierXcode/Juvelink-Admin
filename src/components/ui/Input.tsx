"use client"
import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const variantClasses = {
  default: "border border-gray-300/80 bg-white text-gray-900 focus:border-gray-500",
  outline: "border border-transparent bg-white text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500",
  ghost: "bg-transparent border-none text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500",
} as const;

const sizeClasses = {
  sm: "px-3 py-1 text-sm",
  md: "px-4 py-1.5 text-base",
  lg: "px-5 py-3 text-lg",
} as const;

type InputVariant = keyof typeof variantClasses;
type InputSize = keyof typeof sizeClasses;

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
  variant?: InputVariant;
  sizing?: InputSize;   
  error?: string,
  name: string
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant = "default", sizing = "md", type = "text", error, name , ...props }, ref) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const isPassword = type === "password";

    return (
      <div className="w-full">
        <div className="relative">
          <input
            id={name}
            name={name}
            type={isPassword && showPassword ? "text" : type}
            autoComplete="off"
            ref={ref}
            className={cn(
                "rounded-md transition-all disabled:opacity-50 focus:outline-none w-full",
                variantClasses[variant],
                sizeClasses[sizing], 
                className
              )
            }
            {...props}
          />

          {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute text-gray-500 cursor-pointer right-1.5 top-1/2 -translate-y-1/2 hover:text-gray-700 focus:outline-none"
            tabIndex={-1}
          >
            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
          )}
          </div>
        { error && ( <div className="mt-1 ml-3 text-xs font-light text-red-500">{error}</div> ) }
      </div>
    );
  }
);

Input.displayName = "Input";
