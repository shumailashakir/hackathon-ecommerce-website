import React from "react";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import { LuPhone } from "react-icons/lu";
import { TfiEmail } from "react-icons/tfi";
import { FaInstagram, FaYoutube, FaFacebook, FaTwitter } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdOutlineAccountCircle } from "react-icons/md";
import { CiSearch, CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";

const montserrat = Montserrat({
  weight: ["400", "700"],
  style: "normal",
  subsets: ["latin"],
  display: "swap",
});

const Topline = () => {
  return (
    <div>
      {/* Container for the whole header */}
      <div className="max-w-[1439px] mx-auto flex flex-col gap-2">
        {/* Topline */}
        <div
          className={`hidden md:flex justify-between items-center h-[58px] bg-[#252B42] px-4 ${montserrat.className}`}
        >
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
            <h6 className="text-sm font-bold">
              Follow Us and get a chance to win 80% off
            </h6>
          </div>
          <div className="flex items-center gap-4 text-white">
            <h6 className="text-sm font-bold">Follow Us:</h6>
            <div className="flex gap-2">
              <a href="#" className="p-2">
                <FaInstagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-2">
                <FaYoutube className="w-4 h-4" />
              </a>
              <a href="#" className="p-2">
                <FaFacebook className="w-4 h-4" />
              </a>
              <a href="#" className="p-2">
                <FaTwitter className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Navbar */}
        <div
          className={`flex items-center justify-between px-4 py-4 ${montserrat.className}`}
        >
          {/* Logo */}
          <h3 className="text-2xl font-bold text-[#252B42]">Bandage</h3>

          {/* Links for desktop */}
          <div className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-bold text-[#252B42]">
              Home
            </Link>
            <Link
              href="/"
              className="text-sm font-bold text-[#252B42] flex items-center"
            >
              Shop <RiArrowDropDownLine className="text-xl" />
            </Link>
            <Link href="/" className="text-sm font-bold text-[#252B42]">
              About
            </Link>
            <Link href="/" className="text-sm font-bold text-[#252B42]">
              Blog
            </Link>
            <Link href="/" className="text-sm font-bold text-[#252B42]">
              Contact
            </Link>
            <Link href="/" className="text-sm font-bold text-[#252B42]">
              Pages
            </Link>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-4 text-[#23A6F0]">
            <a href="#" className="flex items-center gap-1">
              <MdOutlineAccountCircle />
              <span className="text-sm font-bold hidden lg:block">
                Login / Register
              </span>
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

        {/* Mobile Menu */}
        <div className="flex md:hidden justify-between items-center px-4 py-2">
          <h3 className="text-2xl font-bold text-[#252B42]">Bandage</h3>
          {/* Hamburger Menu */}
          <button className="text-2xl text-[#252B42]">
            {/* Add toggle functionality if needed */}
            &#9776;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Topline;
