import Image from "next/image"

type HeaderProps = {
    title: string,
    description: string
}

export default function Header( {title, description} : HeaderProps ){
    return (
         <div className="flex items-center justify-between px-4 py-4 rounded-md shadow-md">
            <div>
                <div className="text-xs text-neutral-900/60">{description}</div>
                <div className="text-[#000359] font-semibold text-lg mt-1">{title}</div>
            </div>
            <Image src="logo.svg" alt="rrcy_logo" width={32} height={32}/>
        </div>
        
    )
}

