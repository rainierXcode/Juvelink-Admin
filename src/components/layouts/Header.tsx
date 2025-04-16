import Image from "next/image"

export default function Header(){
    return (
        <header className="px-8 py-4 bg-white flex justify-center items-center gap-2">
            <Image src='logo.svg' alt="rrcy_logo" width={32} height={32} ></Image>
            <div className="font-jost font-semibold uppercase">
                <div className="text-sm">AYALA MAGALANG PAMPANGA</div>
                <div className="text-xs">REGIONAL REHABILITATION CENTER FOR YOUTH</div>
            </div>
        </header>
    )
}

