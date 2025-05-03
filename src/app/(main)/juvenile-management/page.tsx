"use client"
import { Input } from "@/components/ui/Input";
import { Search, CloudDownload,EllipsisVertical, Trash2, BookOpenText, PencilRuler } from "lucide-react";
import Button from "@/components/ui/Button";
import Pagination from "@/components/ui/Pagination";
import { Checkbox } from "@/components/ui/Checkbox";
import Header from "@/components/layouts/Header";
import { DropdownMenu, DropdownTrigger, DropdownContent } from "@/components/ui/Dropdown";
import Link from "next/link";

const juveniles = [
    {
      id: 1,
      name: 'Juan Dela Cruz',
      offense: 'Theft',
      custody_duration: '18 Months',
      next_trial: '2025-05-26',
      status: 'Pending'
    },
    {
      id: 2,
      name: 'Maria Santos',
      offense: 'Vandalism',
      custody_duration: '6 Months',
      next_trial: '2025-06-10',
      status: 'In Custody'
    },
    {
      id: 3,
      name: 'Carlos Reyes',
      offense: 'Drug Possession',
      custody_duration: '12 Months',
      next_trial: '2025-07-03',
      status: 'Released on Bail'
    },
    {
      id: 4,
      name: 'Angela Ramos',
      offense: 'Assault',
      custody_duration: '9 Months',
      next_trial: '2025-05-20',
      status: 'Pending'
    },
    {
      id: 5,
      name: 'Miguel Torres',
      offense: 'Burglary',
      custody_duration: '15 Months',
      next_trial: '2025-06-18',
      status: 'In Custody'
    },
    {
      id: 6,
      name: 'Sofia Mendoza',
      offense: 'Cybercrime',
      custody_duration: '8 Months',
      next_trial: '2025-05-30',
      status: 'Pending'
    }
  ];
  

export default function JuvenileManagement() {
  return (
   <div className="flex flex-col min-h-screen px-8 pt-4 font-poppins">
      <Header title="Juvenile Management" description="Manage here your juveniles" />

      <div className="flex items-center justify-between mt-6">
        <div className="flex items-center gap-2">
            <div 
            className="flex items-center w-64 gap-1 px-2 py-1 text-xs transition-colors border rounded-sm focus-within:border-neutral-900/70 focus-within:border group border-neutral-900/30">
                <Search size={16} className="text-neutral-900/50 group-focus-within:text-neutral-900/70"/>
                <Input name="search" sizing="sm" className="flex-1 p-0 text-sm border-0 peer" placeholder="Search..."/>
            </div>

            <Button  size="sm" className="text-xs py-1.5 bg-emerald-600 hover:bg-emerald-700 gap-1.5">
                <CloudDownload size={16}/>
                Export to excel
            </Button>
        </div>

            <div></div>
      </div>

      <div className="flex-1 border-b border-b-neutral-900/10">
        <div className="mt-6 overflow-x-auto">
            <table className="w-full overflow-hidden font-normal">
                <thead >
                    <tr className="bg-gray-100 [&>th]:font-normal [&>th]:p-1.5 text-[13px] text-left">
                        <th></th>
                        <th>Name</th>
                        <th >Offense</th>
                        <th>Custody Duration</th>
                        <th>Next Trial Date</th>
                        <th>Status</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody className="text-xs [&>tr>td]:px-1.5 [&>tr>td]:py-2 [&>tr]:font-medium [&>tr]:hover:bg-gray-100">
                    {
                        juveniles.map((juvenile) => (
                            <tr key={juvenile.id}>
                                <td>
                                    <Checkbox checked={true} onChange={() => {}} size="sm" className="[&>button]:bg-blue-400    "/>
                                </td>
                                <td>{ juvenile.name }</td>
                                <td className="text-red-500"> {juvenile.offense} </td>
                                <td> {juvenile.custody_duration} </td>
                                <td className="text-blue-500"> {juvenile.next_trial} </td>
                                <td className="text-red-500"> {juvenile.status} </td>
                                <td className="w-4 box-border p-0">
                                  <DropdownMenu>
                                      <DropdownTrigger>
                                        <Button size="sm" variant="ghost" className="flex justify-center p-0.5 text-neutral-900/50">
                                          <EllipsisVertical size={16} />
                                        </Button>
                                      </DropdownTrigger>

                                      <DropdownContent className="border-[#5C7199]/30 right-2 top-full w-24 divide-y divide-white/60 ">
                                          <Link href={`/juvenile-management/edit/${juvenile.id}`}>
                                            <Button variant="ghost" size="sm" className="gap-2 text-xs w-full justify-start py-1.5">
                                                <PencilRuler size={14}/>
                                                Edit
                                            </Button>
                                          </Link>

                                          <Link href={'/delete'}>
                                            <Button variant="ghost" size="sm" className="gap-2 text-xs w-full justify-start py-1.5">
                                                <Trash2 size={14}/>
                                                Delete
                                            </Button>
                                          </Link>

                                          <Link href={`/juvenile-management/details/${juvenile.id}`}>
                                            <Button variant="ghost" size="sm" className="gap-2 text-xs w-full justify-start py-1.5">
                                                <BookOpenText size={14}/>
                                                Details
                                            </Button>
                                          </Link>
                                      </DropdownContent>
                                  </DropdownMenu>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </div>
      </div>

      <Pagination className="font-poppins p-2.5 [&>button]:py-1.5 [&>button]:outline-0 [&>button]:font-normal"/>
      
   </div>
  );
}
