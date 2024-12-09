// pages/about.js (About Page)
import React from "react";
import Image from "next/image";
import girl from "/public/girl.png"; // Import image


const About = () => {
  return (
    <div>
      {/* About Section */}
      <section className="relative py-32 pl-8 sm:pl-16 lg:pl-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Column 1 */}
            <div className="flex flex-col items-start">
              <h5 className="font-semibold text-xs sm:text-sm md:text-base text-[#252B42]">ABOUT COMPANY</h5>
              <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl text-[#252B42]">ABOUT US</h1>
              <h4 className="font-normal text-lg sm:text-xl md:text-2xl text-black mt-4">
                We know how large objects will act. <br /> but things on a small scale
              </h4>
              <div className="flex flex-row items-start gap-4 mt-8">
                <button className="bg-[#23A6F0] text-white px-6 py-3 rounded-lg text-sm sm:text-base">
                  Get Quote Now
                </button>
              </div>
            </div>

            {/* Column 2 (Image) */}
            <div className="flex justify-center sm:justify-end items-center">
              <Image
                src={girl}
                alt="girl"
                width={600} // Increased width
                height={600} // Increased height
                className="object-contain max-w-full h-auto" // Ensure the image maintains its aspect ratio and is responsive
              />
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="relative bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <h1 className="text-4xl font-bold text-black">15K</h1>
              <p className="text-lg font-semibold text-black">Happy Customers</p>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-4xl font-bold text-black">150K</h1>
              <p className="text-lg font-semibold text-black">Monthly Visitors</p>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-4xl font-bold text-black">15</h1>
              <p className="text-lg font-semibold text-black">Countries Worldwide</p>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-4xl font-bold text-black">100+</h1>
              <p className="text-lg font-semibold text-black">Top Partners</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

