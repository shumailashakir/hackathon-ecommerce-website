

import React from "react"
import Image from "next/image"
import Navbar from "@/components/Navbar"
import ProductGrid from "@/components/ProductGrid"
export default function Shop() {
  return (
    <div className="p-4 sm:p-8">
      <Navbar />

      {/* Shop Section */}
      <h1 className="text-xl sm:text-2xl font-bold mb-6 text-center">Shop</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {/* Card 1 */}
        <div className="relative bg-gray-200 rounded-lg overflow-hidden">
          <Image
            src="/card-1.png"
            alt="CLOTHS"
            width={300}
            height={200}
            className="w-full h-40 sm:h-60 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
            <h2 className="text-lg sm:text-xl font-semibold">CLOTHS</h2>
            <p>5 Items</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative bg-gray-200 rounded-lg overflow-hidden">
          <Image
            src="/card-2.png"
            alt="CLOTHS"
            width={300}
            height={200}
            className="w-full h-40 sm:h-60 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
            <h2 className="text-lg sm:text-xl font-semibold">CLOTHS</h2>
            <p>5 Items</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative bg-gray-200 rounded-lg overflow-hidden">
          <Image
            src="/card-3.png"
            alt="CLOTHS"
            width={300}
            height={200}
            className="w-full h-40 sm:h-60 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
            <h2 className="text-lg sm:text-xl font-semibold">CLOTHS</h2>
            <p>5 Items</p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="relative bg-gray-200 rounded-lg overflow-hidden">
          <Image
            src="/card-4.png"
            alt="CLOTHS"
            width={300}
            height={200}
            className="w-full h-40 sm:h-60 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
            <h2 className="text-lg sm:text-xl font-semibold">CLOTHS</h2>
            <p>5 Items</p>
          </div>
        </div>

        {/* Card 5 */}
        <div className="relative bg-gray-200 rounded-lg overflow-hidden">
          <Image
            src="/card-5.png"
            alt="CLOTHS"
            width={300}
            height={200}
            className="w-full h-40 sm:h-60 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
            <h2 className="text-lg sm:text-xl font-semibold">CLOTHS</h2>
            <p>5 Items</p>
          </div>
          </div>
          
         </div>

      

          <section className="text-center py-16 px-4">
                       
                       
                         <Image src="/logos-2.png"
                         alt="logo"
                         width="1200"
                         height="1200" 
                         className="w-full h-full items-center"/>
                         
                     </section>

                     
                     
             <div> 
              <ProductGrid />
              </div> 

                          
         </div>
        
         
  )};
  
 