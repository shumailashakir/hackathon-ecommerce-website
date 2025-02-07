"use client";

import React, { useState } from "react";
import Link from "next/link";
import PricingFAQs from "@/components/PricingFAQs"; // Import the FAQs component
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Pricing = () => {
  const [yearly, setYearly] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center py-6 px-10 shadow-md">
        <h1 className="text-2xl font-bold text-gray-800">Bandage</h1>
        <ul className="flex space-x-6">
          <Link href="/" className="text-gray-600 hover:text-black cursor-pointer">
            Home
          </Link>
          <Link href="/product" className="text-gray-600 hover:text-black cursor-pointer">
            Product
          </Link>
          <Link href="/pricing" className="text-gray-600 hover:text-black cursor-pointer">
            Pricing
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-black cursor-pointer">
            Contact
          </Link>
        </ul>
        <div>
          <button className="text-blue-500 mr-4">Login</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Become a member</button>
        </div>
      </nav>

      {/* Header */}
      <div className="text-center py-12">
        <h2 className="text-black uppercase tracking-wide py-8">PRICING</h2>
        <h1 className="text-4xl font-bold text-black">Simple Pricing</h1>
        <p className="mt-4 text-black font-bold">Home | Pricing</p>     
        <h3 className="text-4xl font-bold text-black mt-16">Pricing</h3>
        <p className="text-black mt-2">
          Problems trying to resolve the conflict between <br /> the two major realms Classical physics: Newtonian mechanics.
        </p>
      </div>

      {/* Toggle Button */}
      <div className="flex justify-center items-center space-x-4">
        <span className="text-black font-bold">Monthly</span>
        <button
          className={`w-14 h-7 flex items-center bg-gray-300 rounded-full p-1 transition-all ${yearly ? "bg-blue-500" : ""}`}
          onClick={() => setYearly(!yearly)}
        >
          <div className={`bg-white w-6 h-6 rounded-full shadow-md transform ${yearly ? "translate-x-7" : ""}`}></div>
        </button>
        <span className="text-black font-bold">
          Yearly <span className="text-blue-500">Save 25%</span>
        </span>
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-12 px-4">
        {/* Free Plan */}
        <div className="border rounded-lg p-6 text-center shadow-md">
          <h3 className="text-lg font-bold text-gray-800">FREE</h3>
          <p className="text-gray-600 mt-2">Organize across all <br /> apps by hand</p>
          <p className="text-3xl text-blue-500 font-bold mt-4">0 $</p>
          <p className="text-blue-500">Per Month</p>
          <p className="mt-4 text-black font-bold">✔ Unlimited product updates</p>
        </div>

        {/* Standard Plan */}
        <div className="border rounded-lg p-6 text-center shadow-md bg-gray-900 text-white">
          <h3 className="text-lg font-bold">STANDARD</h3>
          <p className="mt-2">Organize across all <br /> apps by hand</p>
          <p className="text-3xl font-bold mt-4">9.99 $</p>
          <p>Per Month</p>
          <p className="mt-4">✔ Unlimited product updates</p>
        </div>

        {/* Premium Plan */}
        <div className="border rounded-lg p-6 text-center shadow-md">
          <h3 className="text-lg font-bold text-gray-800">PREMIUM</h3>
          <p className="text-gray-600 mt-2">Organize across all <br /> apps by hand</p>
          <p className="text-3xl text-blue-500 font-bold mt-4">19.99 $</p>
          <p className="text-blue-500">Per Month</p>
          <p className="mt-4 text-black font-bold">✔ Unlimited product updates</p>
        </div>
      </div>

      {/* FAQs Section */}
      <PricingFAQs />

      {/* Call to Action */}
      <section className="text-center py-16 bg-gray-100 px-4">
        <h2 className="text-3xl font-bold pb-4">Start your 14 days free trial</h2>
        <p className="text-black">Experience the best fashion trends with us.</p>
        <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg">Try it free now</button>
        <div className="flex space-x-4 justify-center items-center pt-4">
          <a href="#" className="text-blue-500 text-xl">
            <FaFacebookF />
          </a>
          <a href="#" className="text-blue-500 text-xl">
            <FaInstagram />
          </a>
          <a href="#" className="text-blue-400 text-xl">
            <FaTwitter />
          </a>
          <a href="#" className="text-blue-400 text-xl">
            <FaLinkedin />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
