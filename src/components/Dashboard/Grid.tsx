import { cn } from "@/lib/utils"

export default function Grid({children, className} : {
    children: React.ReactNode,
    className?: string
}){
    return (
        <main className={cn("grid grid-cols-12 gap-3 py-4  [&>div]:border [&>div]:rounded-md [&>div]:border-neutral-900/10 ", className)}>
            {children}
        </main>
    )
}