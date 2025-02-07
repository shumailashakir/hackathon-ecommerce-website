"use client";

import React from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Graphic Design",
    category: "English Department",
    price: "$16.48",
    discountPrice: "$6.48",
    image: "/men.jpg",
    colors: ["bg-blue-500", "bg-green-500", "bg-orange-500", "bg-teal-500"],
  },
  {
    id: 2,
    name: "Graphic Design",
    category: "English Department",
    price: "$16.48",
    discountPrice: "$6.48",
    image: "/women.jpg",
    colors: ["bg-blue-500", "bg-green-500", "bg-orange-500", "bg-teal-500"],
  },
  {
    id: 3,
    name: "Graphic Design",
    category: "English Department",
    price: "$16.48",
    discountPrice: "$6.48",
    image: "/yellow-girl.png",
    colors: ["bg-blue-500", "bg-green-500", "bg-orange-500", "bg-teal-500"],
  },
  {
    id: 4,
    name: "Graphic Design",
    category: "English Department",
    price: "$16.48",
    discountPrice: "$6.48",
    image: "/boy.jpg",
    colors: ["bg-blue-500", "bg-green-500", "bg-orange-500", "bg-teal-500"],
  },
  {
    id: 5,
    name: "Graphic Design",
    category: "English Department",
    price: "$16.48",
    discountPrice: "$6.48",
    image: "/sitting-boy.png",
    colors: ["bg-blue-500", "bg-green-500", "bg-orange-500", "bg-teal-500"],
  },
  {
    id: 6,
    name: "Graphic Design",
    category: "English Department",
    price: "$16.48",
    discountPrice: "$6.48",
    image: "/currly-boy.png",
    colors: ["bg-blue-500", "bg-green-500", "bg-orange-500", "bg-teal-500"],
  },
  {
    id: 7,
    name: "Graphic Design",
    category: "English Department",
    price: "$16.48",
    discountPrice: "$6.48",
    image: "/white-shirt.png",
    colors: ["bg-blue-500", "bg-green-500", "bg-orange-500", "bg-teal-500"],
  },
  {
    id: 8,
    name: "Graphic Design",
    category: "English Department",
    price: "$16.48",
    discountPrice: "$6.48",
    image: "/pink-shirt.png",
    colors: ["bg-blue-500", "bg-green-500", "bg-orange-500", "bg-teal-500"],
  },
  {
    id: 9,
    name: "Graphic Design",
    category: "English Department",
    price: "$16.48",
    discountPrice: "$6.48",
    image: "/black-shirt.png",
    colors: ["bg-blue-500", "bg-green-500", "bg-orange-500", "bg-teal-500"],
  },
  {
    id: 10,
    name: "Graphic Design",
    category: "English Department",
    price: "$16.48",
    discountPrice: "$6.48",
    image: "/jacket-boy.png",
    colors: ["bg-blue-500", "bg-green-500", "bg-orange-500", "bg-teal-500"],
  },
  {
    id: 11,
    name: "Graphic Design",
    category: "English Department",
    price: "$16.48",
    discountPrice: "$6.48",
    image: "/blue-shirt.png",
    colors: ["bg-blue-500", "bg-green-500", "bg-orange-500", "bg-teal-500"],
  },
  {
    id: 12,
    name: "Graphic Design",
    category: "English Department",
    price: "$16.48",
    discountPrice: "$6.48",
    image: "/brown-jacket.png",
    colors: ["bg-blue-500", "bg-green-500", "bg-orange-500", "bg-teal-500"],
  },
];

const ProductPage = () => {
  return (
    <div className="min-h-screen bg-white py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg shadow-md p-4 text-center">
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={400}
              className="w-full h-auto rounded-lg"
            />
            <h3 className="text-lg font-bold mt-4">{product.name}</h3>
            <p className="text-gray-600">{product.category}</p>
            <p className="text-gray-500 line-through">{product.price}</p>
            <p className="text-green-600 font-bold">{product.discountPrice}</p>
            <div className="flex justify-center space-x-2 mt-2">
              {product.colors.map((color, index) => (
                <span key={index} className={`w-4 h-4 rounded-full ${color}`}></span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-8 space-x-2">
        <button className="px-4 py-2 border rounded-md text-gray-600 hover:bg-gray-200">
          <FaChevronLeft />
        </button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md">1</button>
        <button className="px-4 py-2 border rounded-md text-gray-600 hover:bg-gray-200">2</button>
        <button className="px-4 py-2 border rounded-md text-gray-600 hover:bg-gray-200">3</button>
        <button className="px-4 py-2 border rounded-md text-gray-600 hover:bg-gray-200">
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default ProductPage;
