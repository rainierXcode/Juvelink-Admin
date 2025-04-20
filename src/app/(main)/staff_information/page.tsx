"use client"
import { CloudDownload, Plus, Ellipsis } from "lucide-react";
import Button from "@/components/ui/Button";
import Pagination from "@/components/ui/Pagination";
import Header from "@/components/layouts/Header";


const staffs = [
    {
      id: 1,
      name: 'Juan Dela Cruz',
      contact: '09123456789',
      email: 'fakeemail@gmail.com',
      role: 'Social Worker',
      hire_date: '2025-05-26',
    },
    {
      id: 2,
      name: 'Maria Santos',
      contact: '09234567890',
      email: 'maria.santos@example.com',
      role: 'Case Manager',
      hire_date: '2024-11-15',
    },
    {
      id: 3,
      name: 'Carlos Reyes',
      contact: '09345678901',
      email: 'carlos.reyes@example.com',
      role: 'Psychologist',
      hire_date: '2023-08-01',
    },
    {
      id: 4,
      name: 'Ana Rivera',
      contact: '09456789012',
      email: 'ana.rivera@example.com',
      role: 'Administrative Assistant',
      hire_date: '2022-01-10',
    },
    {
      id: 5,
      name: 'Mark Villanueva',
      contact: '09567890123',
      email: 'mark.villanueva@example.com',
      role: 'Security Personnel',
      hire_date: '2025-03-05',
    },
    {
      id: 6,
      name: 'Liza Mendoza',
      contact: '09678901234',
      email: 'liza.mendoza@example.com',
      role: 'Social Worker',
      hire_date: '2024-07-20',
    },
    {
      id: 7,
      name: 'Jose Fernandez',
      contact: '09789012345',
      email: 'jose.fernandez@example.com',
      role: 'Therapist',
      hire_date: '2023-12-12',
    },
    {
      id: 8,
      name: 'Katrina Lopez',
      contact: '09890123456',
      email: 'katrina.lopez@example.com',
      role: 'Volunteer Coordinator',
      hire_date: '2025-01-08',
    },
  ];
  

export default function Inventory() {
  return (
   <div className="flex flex-col min-h-screen px-8 pt-4 font-poppins">
      <Header title="Inventory Management" description="Manage here your supplies" />

      <div className="flex items-center justify-end mt-6 gap-4">
          <Button leftIcon={<CloudDownload size={16}/>} size="sm" className="text-xs py-1.5 bg-emerald-600 hover:bg-emerald-700">
              Export to excel
          </Button>

          <Button leftIcon={<Plus size={16}/>} size="sm" className="text-xs py-1.5 bg-black hover:bg-black/70">
              Add new staff
          </Button>
      </div>

      <div className="flex-1 border-b border-b-neutral-900/10">
        <div className="mt-6 overflow-x-auto">
            <table className="w-full overflow-hidden font-normal">
                <thead >
                    <tr className="bg-gray-100 [&>th]:font-normal [&>th]:p-1.5 [&>th]:px-8 text-[13px] text-left">
                        <th>Name</th>
                        <th>Contact</th>
                        <th >Email</th>
                        <th>Role</th>
                        <th>Hire Date</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody className="text-xs  [&>tr>td]:py-2 [&>tr>td]:px-8 [&>tr]:font-medium [&>tr]:hover:bg-gray-100">
                    {
                        staffs.map((staff) => (
                            <tr key={staff.id}>
                                <td>{ staff.name } </td>
                                <td>{ staff.contact }</td>
                                <td className="text-red-500"> {staff.email} </td>
                                <td> {staff.role} </td>
                                <td> {staff.hire_date} </td>
                                <td className="w-4 box-border p-0">
                                  <Button size="sm" variant="ghost" className="flex justify-center p-0.5"  leftIcon={ <Ellipsis size={16} /> }/>
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
