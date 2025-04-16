"use client"
import Header from './Header';
import Link from 'next/link';
import Button from '../ui/Button';

const navigationList = [
    {
        name: "Home",
        path: '/',
    },
    {
        name: "About Us",
        path: '/about',
    },
    {
        name: "Info",
        path: "/info",
    },
    {
        name: "Services",
        path: "/services"
    },
    {
        name: "Contact Us",
        path: "/contacts"
    },
    {
        name: "Visit",
        path: '/visit'
    }
]

export default function Navigation(){
    return (
       <>
        <Header />
        <nav className="bg-[#2E3191] px-12 py-4  sticky top-0 z-50 overflow-hidden flex items-center justify-between">
        <ul className="flex gap-10 font-jost font-medium text-sm">
            {
                navigationList.map((nav, index) => (
                    <li key={index}>
                        <Link href={nav.path} className={`text-white uppercase`}>
                            {
                                nav.name
                            }
                        </Link>
                    </li>
                ))
            }
        </ul>

        <div>
            <Button className='text-white text-sm border border-white hover:bg-transparent' variant='outline'> Log In </Button>
        </div>
        </nav>
       </>
    )
}

