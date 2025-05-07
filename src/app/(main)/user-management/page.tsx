"use client"
import { Plus, Ellipsis } from "lucide-react";
import Button from "@/components/ui/Button";
import Pagination from "@/components/ui/Pagination";
import Header from "@/components/layouts/Header";
import CreateUserModal from "./create_user";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useSearchParams } from "next/navigation";

import axiosInstance from "@/lib/axios";
import { useQuery, keepPreviousData } from "@tanstack/react-query"
import { ColumnDef, useReactTable, getCoreRowModel, getPaginationRowModel, flexRender } from '@tanstack/react-table'

type User = {
  user_id: number;
  email: string,
  access_id: string,
  first_name: string
  last_name: string,
  created_at: string,
  role: string
}

type ApiResponse = { users: User[]; total: number };

const fetchUsers = async (page: number, pageSize: number) : Promise< ApiResponse > => {
  const response = await axiosInstance.get('/users/getAll', {
    params: { page, limit: pageSize }
  })

  return { users: response.data.data, total: 2 };
}

const useUsersQuery = (page: number, pageSize: number) => {
  return useQuery({
    queryKey: ['users', page, pageSize],
    queryFn: () => fetchUsers(page, pageSize),
    placeholderData: keepPreviousData
  })
}

export default function UserManagement() {
    const { page } = Object.fromEntries(useSearchParams())

    const currentPage = page ? parseInt(page, 10) : 1

    const { data, isLoading, error } = useUsersQuery(currentPage, 10)

    const [isOpenCreateUser, setIsOpenCreateUser] = useState<boolean>(false);


    const columns: ColumnDef<User>[] = [
      { header: "First Name", accessorKey: "first_name"},
      { header: "Last Name", accessorKey: "last_name"},
      { header: "Access",  accessorFn: (row) => row.access_id ?? row.email },
      { header: "Role", accessorKey: "role"},
      { header: "Created At", accessorKey: "created_at"},
    ]

    const pageSize = 10;
    
    const table = useReactTable({
      data: data?.users || [], 
      columns,
      getCoreRowModel: getCoreRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
      manualPagination: true,
      pageCount: Math.ceil((data?.total || 0) / pageSize), 
      state: { pagination: { pageIndex: currentPage - 1, pageSize } }, 
    });

    if(isLoading) return <div>Loading...</div>

    if(error) return <div>Error...</div>

    
    return (
    <>
        <AnimatePresence>
            {
                isOpenCreateUser && (
                    <CreateUserModal onClose={() => setIsOpenCreateUser(false)}/>
                )
            }
        </AnimatePresence>
        <div className="flex flex-col min-h-screen px-8 pt-4 font-poppins">
        <Header title="User Management" description="Manage here your users" />

        <div className="flex items-center justify-end mt-6 gap-4">
            <Button onClick={() => setIsOpenCreateUser(true)} size="sm" className="text-xs py-1.5 bg-black hover:bg-black/70">
                <Plus size={16}/>
                Add user
            </Button>
        </div>

        <div className="flex-1 border-b border-b-neutral-900/10">
            <div className="mt-6 overflow-x-auto">
                <table className="w-full overflow-hidden font-normal">
                    <thead >
                        {table.getHeaderGroups().map((headerGroup) => (
                          <tr key={headerGroup.id} className="bg-gray-100 [&>th]:font-normal [&>th]:p-1.5 [&>th]:px-8 text-[13px] text-left">
                            {headerGroup.headers.map((header) => (
                              <th key={header.id}>
                                  {
                                    flexRender(
                                      header.column.columnDef.header,
                                      header.getContext()
                                    )
                                  }
                              </th>
                            ))}
                          </tr>
                        ))}
                    </thead>
                    <tbody className="text-xs  [&>tr>td]:py-2 [&>tr>td]:px-8 [&>tr]:font-medium [&>tr]:hover:bg-gray-100">
                    {table.getRowModel().rows.map((row) => (
                      <tr key={row.id}>
                        {row.getVisibleCells().map((cell) => (
                          <td key={cell.id}>
                             {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext()
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
        
                    </tbody>
                </table>

            </div>
        </div>

        <Pagination className="font-poppins p-2.5 [&>button]:py-1.5 [&>button]:outline-0 [&>button]:font-normal"/>
        
        </div>
    </>
    );
}
