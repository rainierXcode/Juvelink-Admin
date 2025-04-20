    import { cn } from "@/lib/utils";
    import { Check } from "lucide-react";

    type CheckboxProps = {
        checked: boolean;
        onChange: (checked: boolean) => void;
        label?: string;
        className?: string;
        disabled?: boolean;
        variant? : 'default' | 'circle',
        size?: 'xs' | 'sm' | 'md' | 'lg'
    }

    export function Checkbox({
        checked,
        onChange,
        label,
        className,
        disabled = false,
        variant = 'default',
        size = 'sm'
    } : CheckboxProps){

        const handleChange = (event: React.MouseEvent) => {
            event.preventDefault(); 
            onChange(!checked); 
        };


        return (
            <label
            className={cn(
            "flex items-center gap-2 cursor-pointer select-none",
            disabled && "opacity-50 cursor-not-allowed",
            className
            )}
        >
            <button
            type="button"
            disabled={disabled}
            onClick={handleChange}
            className={cn(
                "rounded border border-gray-300 flex items-center justify-center transition-colors cursor-pointer box-border ease-in-out",
                checked ? "bg-black  text-white" : "bg-white",
                variant === 'circle' && 'rounded-full',
                size === "xs" && "w-3.5 h-3.5 p-0.5", 
                size === "sm" && "w-4 h-4 p-0.5", 
                size === "md" && "w-6 h-6 p-1", 
                size === "lg" && "w-8 h-8 p-1.5"
            )}
            >
                 {checked && <Check className="text-white size-full" />}
            </button>
            {label && <span>{label}</span>}
        </label>
        )
    }