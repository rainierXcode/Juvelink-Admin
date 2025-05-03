"use client"
import { CloudDownload, Plus, Ellipsis } from "lucide-react";
import Button from "@/components/ui/Button";
import Pagination from "@/components/ui/Pagination";
import Header from "@/components/layouts/Header";


const products = [
    {
      id: 1,
      name: 'Product 1',
      product_quantity: 100,
      price: 1000
    },

    {
      id: 2,
      name: 'Product 2',
      product_quantity: 200,
      price: 2000
    },


    {
      id: 3,
      name: 'Product 3',
      product_quantity: 100,
      price: 200
    },

    {
      id: 4,
      name: 'Product 4',
      product_quantity: 1500,
      price: 3000
    },
   
  ];
  

export default function Inventory() {
  return (
   <div className="flex flex-col min-h-screen px-8 pt-4 font-poppins">
      <Header title="Inventory Management" description="Manage here your supplies" />

      <div className="flex items-center justify-end mt-6 gap-4">
          <Button  size="sm" className="text-xs py-1.5 bg-emerald-600 hover:bg-emerald-700 gap-1.5">
            <CloudDownload size={16}/>
              Export to excel
          </Button>

          <Button  size="sm" className="text-xs py-1.5 bg-black hover:bg-black/70 gap-1.5">
             <Plus size={16}/>
              Add new product
          </Button>
      </div>

      <div className="flex-1 border-b border-b-neutral-900/10">
        <div className="mt-6 overflow-x-auto">
            <table className="w-full overflow-hidden font-normal">
                <thead >
                    <tr className="bg-gray-100 [&>th]:font-normal [&>th]:p-1.5 [&>th]:px-8 text-[13px] text-left">
                        <th>Product</th>
                        <th>Item</th>
                        <th >Price</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody className="text-xs  [&>tr>td]:py-2 [&>tr>td]:px-8 [&>tr]:font-medium [&>tr]:hover:bg-gray-100">
                    {
                        products.map((product) => (
                            <tr key={product.id}>
                                <td>
                                  { product.name }
                                </td>
                                <td>{ product.product_quantity }</td>
                                <td className="text-red-500"> {product.product_quantity} </td>
                                <td className="w-4 box-border p-0">
                                  <Button size="sm" variant="ghost" className="flex justify-center p-0.5"><Ellipsis size={16} /></Button>
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
