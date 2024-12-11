import React from "react";
import Image from "next/image";

export default function ClassicProduct() {
  return (
      <div className="min-h-screen bg-green-800 flex items-center justify-center">
        <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto">
          {/* Left Side */}
          <div className="text-white space-y-4 text-center md:text-left md:w-1/2">
            <p className="uppercase tracking-widest">Summer 2020</p>
            <h1 className="text-4xl md:text-5xl font-bold">Vita Classic Product</h1>
            <p className="text-sm md:text-base">
              We know how large objects will act. We know how are objects will act, We know.
            </p>
            <p className="text-xl font-semibold">$16.48</p>
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md">
              Add to Cart
            </button>
          </div>
  
          {/* Right Side */}
          <div className="mt-6 md:mt-0 md:w-1/2">
            <Image
              src="/ahmed.png.png"
              height="100"
              width="100"
              alt="Vita Classic Product"
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </div>
    );
  }