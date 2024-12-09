import React from "react";
import Image from "next/image";

export default function HeroSection() {
    return (
        <div className="relative overflow-hidden">
            {/* Hero Image */}
            <Image
                alt="hero image"
                src="/hero.jpg"
                width={1540}
                height={716}
                className="w-full h-auto object-cover" // Ensure the image covers the area while maintaining aspect ratio
            />

            {/* Hero Text and Button */}
            <div className="absolute inset-0 flex flex-col justify-center items-start p-6 sm:p-8 lg:p-12 text-center sm:text-left">
                <p className="font-semibold text-white text-xs sm:text-sm md:text-base pl-20">SUMMER 2020</p>
                <p className="leading-tight text-white text-xl sm:text-2xl md:text-4xl font-bold mt-2">NEW COLLECTION</p>
                <p className="leading-snug text-white font-semibold text-sm sm:text-base lg:text-lg lg:w-[400px] mt-4">
                    We know how large objects will act, but things on a small scale.
                </p>
                <button className="mt-6 lg:mt-8 bg-[#2dc070] text-white font-bold rounded-sm py-2 px-6  text-sm lg:text-base ">
                    SHOP NOW
                </button>
            </div>
        </div>
    );
}
