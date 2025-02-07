"use client"
import React, { useState } from "react";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import { LuPhone } from "react-icons/lu";
import { TfiEmail } from "react-icons/tfi";
import { FaInstagram, FaYoutube, FaFacebook, FaTwitter } from "react-icons/fa";
import { MdOutlineAccountCircle } from "react-icons/md";
import { CiSearch, CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { SheetSide } from "./Sheet";

const montserrat = Montserrat({
  weight: ["400", "700"],
  style: "normal",
  subsets: ["latin"],
  display: "swap",
});

const Topline = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      {/* Container for the whole header */}
      <div className="max-w-[1439px] mx-auto flex flex-col gap-2">
        {/* Topline */}
        <div className={`hidden md:flex justify-between items-center h-[58px] bg-[#252B42] px-4 ${montserrat.className}`}>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 text-white">
              <LuPhone />
              <h6 className="text-sm font-bold">(225) 555-0118</h6>
            </button>
            <button className="flex items-center gap-2 text-white">
              <TfiEmail />
              <h6 className="text-sm font-bold">michelle.rivera@example.com</h6>
            </button>
          </div>
          <div className="hidden lg:flex items-center gap-4 text-white">
            <h6 className="text-sm font-bold">Follow Us and get a chance to win 80% off</h6>
          </div>
          <div className="flex items-center gap-4 text-white">
            <h6 className="text-sm font-bold">Follow Us:</h6>
            <div className="flex gap-2">
              <Link href="#" className="p-2">
                <FaInstagram className="w-4 h-4" />
              </Link>
              <Link href="#" className="p-2">
                <FaYoutube className="w-4 h-4" />
              </Link>
              <Link href="#" className="p-2">
                <FaFacebook className="w-4 h-4" />
              </Link>
              <Link href="#" className="p-2">
                <FaTwitter className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Navbar */}
        <div className={`flex items-center justify-between px-4 py-4 ${montserrat.className}`}>
          <div className="flex justify-center items-center"><SheetSide />
          <h3 className="text-2xl font-bold text-[#252B42] pl-2">Bandage</h3>

          {/* Links for desktop */}
          <div className="hidden md:flex gap-6 pl-12">
            <Link href="/" className="text-sm font-bold text-[#252B42]">Home</Link>
            <Link href="/shop" className="text-sm font-bold text-[#252B42] flex items-center">Shop</Link>
            <Link href="/about" className="text-sm font-bold text-[#252B42]">About</Link>
            <Link href="/blog" className="text-sm font-bold text-[#252b42]">Blog</Link>
            <Link href="/contact" className="text-sm font-bold text-[#252B42]">Contact</Link>
            <Link href="/pages" className="text-sm font-bold text-[#252B42]">Pages</Link>
            
          </div>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-4 text-[#23A6F0]">
            <a href="#" className="flex items-center gap-1">
              <MdOutlineAccountCircle />
              <span className="text-sm font-bold hidden lg:block">Login / Register</span>
            </a>
            <a href="#" className="flex items-center">
              <CiSearch className="text-lg" />
            </a>
            <a href="#" className="flex items-center">
              <IoCartOutline className="text-lg" />
              <span className="ml-1">1</span>
            </a>
            <a href="#" className="flex items-center">
              <CiHeart className="text-lg" />
              <span className="ml-1">1</span>
            </a>
          </div>

         </div>
        
      </div>
    </div>
  );
};

export default Topline;
