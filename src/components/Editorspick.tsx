import React from 'react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold">EDITOR&apos;S PICK</h2>
        <p className="text-gray-600">Problems trying to resolve the conflict between</p>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {/* MEN */}
        <div className="relative">
          <Image
            src="/men.jpg"
            alt="Men"
            width={300}
            height={400}
            className="w-full h-full object-cover rounded"
          />
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-center text-sm font-bold py-2 px-4 rounded shadow">
            MEN
          </div>
        </div>

        {/* WOMEN */}
        <div className="relative">
          <Image
            src="/women.jpg"
            alt="Women"
            width={300}
            height={400}
            className="w-full h-full object-cover rounded"
          />
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-center text-sm font-bold py-2 px-4 rounded shadow">
            WOMEN
          </div>
        </div>

        {/* ACCESSORIES */}
        <div className="relative">
          <Image
            src="/model.jpg"
            alt="Accessories"
            width={300}
            height={400}
            className="w-full h-full object-cover rounded"
          />
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-center text-sm font-bold py-2 px-4 rounded shadow">
            ACCESSORIES
          </div>
        </div>

        {/* KIDS */}
        <div className="relative">
          <Image
            src="/boy.jpg"
            alt="Kids"
            width={300}
            height={400}
            className="w-full h-full object-cover rounded"
          />
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-center text-sm font-bold py-2 px-4 rounded shadow">
            KIDS
          </div>
        </div>
      </div>
    </div>
  );
}
