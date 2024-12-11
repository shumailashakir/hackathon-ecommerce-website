// components/Footer.js
import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10">
      <div className="container mx-auto px-6 md:px-20">
        {/* Top Section */}
        <div className="flex flex-wrap justify-between items-center">
          {/* Logo */}
          <div className="mb-6 md:mb-0">
            <h1 className="text-2xl font-bold text-gray-800">Bandage</h1>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <a href="#" className="text-blue-500 text-xl">
              <FaFacebookF />
            </a>
            <a href="#" className="text-blue-500 text-xl">
              <FaInstagram />
            </a>
            <a href="#" className="text-blue-400 text-xl">
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Links Sections */}
        <div className="flex flex-wrap justify-between w-full mt-10">
          <div className="mb-6 md:mb-0 md:mr-10">
            <h3 className="font-semibold text-gray-800">Company Info</h3>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>About Us</li>
              <li>Carrier</li>
              <li>We are hiring</li>
              <li>Blog</li>
            </ul>
          </div>

          <div className="mb-6 md:mb-0 md:mr-10">
            <h3 className="font-semibold text-gray-800">Legal</h3>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>About Us</li>
              <li>Carrier</li>
              <li>We are hiring</li>
              <li>Blog</li>
            </ul>
          </div>

          <div className="mb-6 md:mb-0 md:mr-10">
            <h3 className="font-semibold text-gray-800">Features</h3>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>Business Marketing</li>
              <li>User Analytics</li>
              <li>Live Chat</li>
              <li>Unlimited Support</li>
            </ul>
          </div>

          <div className="mb-6 md:mb-0 md:mr-10">
            <h3 className="font-semibold text-gray-800">Resources</h3>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>iOS & Android</li>
              <li>Watch a Demo</li>
              <li>Customers</li>
              <li>API</li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div className="w-full md:w-auto">
            <h3 className="font-semibold text-gray-800">Get In Touch</h3>
            <form className="mt-4">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full md:w-auto px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="mt-4 md:mt-0 md:ml-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-2 text-sm text-gray-600">Lorem ipsum dolor sit amet</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 text-center border-t border-gray-200 pt-6">
          <p className="text-gray-600">Made With Love By Finland All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
