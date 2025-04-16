import { createContext, ReactNode, useContext, useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

type PopoverContextType = {
    open: boolean;
    toggle: () => void;
    close: () => void;
}

const PopoverContext = createContext<PopoverContextType | null>(null);


export function Popover({children} : {children:React.ReactNode}){
    const [open, setOpen] = useState<boolean>(false);
    const ref = useRef<HTMLDivElement>(null);

    const toggle = () => setOpen((prev) => !prev);
    const close = () => setOpen(false);


    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if(ref.current && !ref.current.contains(e.target as Node)){
                close();
            }
        }

        document.addEventListener("mousedown" , handleClickOutside);
        return () => document.addEventListener('mousedown', handleClickOutside);
    }, [])

    return (
        <PopoverContext.Provider value={{ open, toggle, close }}>
            <div ref={ref} className="relative">
                {children}
            </div>
        </PopoverContext.Provider>  
    )
}



export function PopoverTrigger({
    className,
    children,
    withChevron = false,
    
} : {
    children:React.ReactNode,
    className?: string,
    withChevron?: boolean
}){
    const ctx = useContext(PopoverContext);
    if (!ctx) throw new Error("PopoverTrigger must be used inside Popover");

    const handleClick = () => {
        ctx.toggle();
    };

    return (
        <div onClick={handleClick} className={cn("cursor-pointer relative", className)}>
            {children}
            { withChevron && <ChevronDown size={16} className={`absolute right-4 top-1/2 -translate-y-1/2 transition-transform duration-200 ${ctx.open && 'rotate-180'}`}/> }
        </div>
    )
}

export function PopoverContent({
    children,
    className,
    floating = true,
    variant = 'default'
  }: {
    children: ReactNode;
    className?: string;
    floating?: boolean;
    variant?: 'default' | 'pop'
  }) {
    const ctx = useContext(PopoverContext);
    if (!ctx) throw new Error("PopoverContent must be used inside Popover");
  
    if (!ctx.open) return null;

    const handleContentClicked = () => {
        if(variant === 'pop'){
            ctx.close();
        }
    }
  
    return (
      <div
        onClick={handleContentClicked}
        className={cn(
          "mt-2 rounded-md border bg-white shadow-lg",
          floating ? "absolute z-50" : 'static',
          className
        )}
      >
        {children}
      </div>
    );
  }