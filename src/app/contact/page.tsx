import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-white">
      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-900">Bandage</div>
          <ul className="hidden md:flex space-x-8 text-gray-600">
            <Link href="/" className="hover:text-blue-500 cursor-pointer">Home</Link>
            <Link href="product" className="hover:text-blue-500 cursor-pointer">Product</Link>
            <Link href="pricing"className="hover:text-blue-500 cursor-pointer">Pricing</Link>
            <Link href="contact"className="hover:text-blue-500 cursor-pointer">Contact</Link>
          </ul>
          <div className="flex items-center space-x-4">
            <button className="text-blue-500 hover:text-blue-600">Login</button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Become a Member
            </button>
          </div>
        </div>
      </nav>

      {/* Header Section */}
      <section className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h4 className="text-sm font-semibold text-gray-500 uppercase">
              CONTACT US
            </h4>
            <h1 className="text-4xl font-bold text-gray-900 mt-2">
              Get in touch <br /> today!
            </h1>
            <p className="text-gray-600 mt-4">
              We know how large objects will act, <br /> but things on a small scale.
            </p>
            <div className="mt-6">
              <p className="text-lg font-semibold text-gray-800">
                Phone: <span className="text-gray-600">+451 215 215</span>
              </p>
              <p className="text-lg font-semibold text-gray-800">
                Fax: <span className="text-gray-600">+451 215 215</span>
              </p>
            </div>

            {/* Social Links */}
            <div className="mt-6 flex justify-center md:justify-start gap-4">
              <a href="#" className="text-gray-600 hover:text-gray-900 text-xl">
                <FaFacebookF />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 text-xl">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 text-xl">
                <FaInstagram />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 text-xl">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src="/family-1.png"
              alt="Family Shopping"
              width={500}
              height={500}
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-6 text-center">
          <p className="mt-4 text-gray-500">VISIT OUR OFFICE</p>
          <h2 className="text-2xl font-semibold text-gray-900">
            We help small businesses with big ideas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {/* Phone Card */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <div className="text-blue-500 text-3xl mb-4">
                <FaPhone />
              </div>
              <p className="text-gray-700">georgia.young@example.com</p>
              <p className="text-gray-700">georgia.young@ple.com</p>
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Get Support
              </button>
            </div>

            {/* Map Card */}
            <div className="bg-black text-white shadow-lg rounded-lg p-6">
              <div className="text-3xl mb-4">
                <FaMapMarkerAlt />
              </div>
              <p>georgia.young@example.com</p>
              <p>georgia.young@ple.com</p>
              <button className="mt-4 bg-white text-blue-900 px-4 py-2 rounded hover:bg-gray-100">
                Submit Request
              </button>
            </div>

            {/* Mail Card */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <div className="text-blue-500 text-3xl mb-4">
                <FaEnvelope />
              </div>
              <p className="text-gray-700">georgia.young@example.com</p>
              <p className="text-gray-700">georgia.young@ple.com</p>
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Get Support
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section className="py-12 text-center">
        <p className="text-xl font-bold text-gray-900">WE CAN&apos;T WAIT TO MEET YOU</p>
        <h2 className="text-4xl font-bold text-black mt-2">Let&apos;s Talk</h2>
        <button className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">
          Try it free now
        </button>
      </section>
    </div>
  );
};

export default Contact;
