import Button from "./Button"
import { cn } from "@/lib/utils"
import { ChevronsLeft, ChevronsRight } from "lucide-react"

type PaginationProps = {
    className?: string,
    size?: 'sm' | 'md' | 'lg'
}

export default function Pagination( 
   { className, size = 'sm' }
: PaginationProps ){
    return (
        <div className={cn("flex items-center justify-center gap-1", className)}>
            <Button 
            leftIcon={<ChevronsLeft size={16}/>}
            variant="ghost" size={size}>Previous</Button>
             <div className="flex [&>button]:p-0 [&>button]:h-8 [&>button]:w-8 [&>button]:aspect-square gap-0.5">
                <Button variant="ghost" size={size}>1</Button>
                <Button variant="ghost" size={size} className="border border-neutral-900/20">2</Button>
                <Button variant="ghost" size={size}>3</Button>
                <Button variant="ghost" size={size}>...</Button>
             </div>
            <Button 
            rightIcon={<ChevronsRight size={16}/>}
            variant="ghost" size={size}>Next</Button>
        </div>
    )
}

