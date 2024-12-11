import Image from "next/image";

const products = [
  {
    id: 1,
    image: "/pic0.jpg",
    title: "Graphic Design",
    department: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
    colors: ["bg-blue-500", "bg-green-500", "bg-orange-500", "bg-black"],
  },
  {
    id: 2,
    image: "/pic1.jpg",
    title: "Graphic Design",
    department: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
    colors: ["bg-blue-500", "bg-green-500", "bg-orange-500", "bg-black"],
  },
  {
    id: 3,
    image: "/pic2.jpg",
    title: "Graphic Design",
    department: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
    colors: ["bg-blue-500", "bg-green-500", "bg-orange-500", "bg-black"],
  },
  {
    id: 4,
    image: "/pic3.jpg",
    title: "Graphic Design",
    department: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
    colors: ["bg-blue-500", "bg-green-500", "bg-orange-500", "bg-black"],
  },
  {
    id: 5,
    image: "/pic-10.png",
    title: "Graphic Design",
    department: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
    colors: ["bg-blue-500", "bg-green-500", "bg-orange-500", "bg-black"],
  },
  {
    id: 6,
    image: "/image.png",
    title: "Graphic Design",
    department: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
    colors: ["bg-blue-500", "bg-green-500", "bg-orange-500", "bg-black"],
  },
  {
    id: 7,
    image: "/pic-4.jpg",
    title: "Graphic Design",
    department: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
    colors: ["bg-blue-500", "bg-green-500", "bg-orange-500", "bg-black"],
  },
  {
    id: 8,
    image: "/pic-6.jpg",
    title: "Graphic Design",
    department: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
    colors: ["bg-blue-500", "bg-green-500", "bg-orange-500", "bg-black"],
  },
];

export default function Product() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Title Section */}
      <div className="text-center mb-8">
        <h2 className="text-gray-500 uppercase tracking-wide">Featured Products</h2>
        <h1 className="text-2xl font-bold text-gray-800">Bestseller Products</h1>
        <p className="text-gray-500">Problems trying to resolve the conflict between</p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="text-center">
            {/* Product Image */}
            <div className="relative mb-4">
              <Image
                src={product.image}
                alt={product.title}
                width={300}
                height={400}
                className="w-full object-contain rounded h-[300px]" // Unified height for all images
              />
            </div>

            {/* Product Info */}
            <h3 className="text-lg font-bold">{product.title}</h3>
            <p className="text-sm text-gray-500">{product.department}</p>

            {/* Pricing */}
            <div className="mt-2">
              <span className="text-gray-400 line-through mr-2">
                {product.oldPrice}
              </span>
              <span className="text-green-500 font-bold">{product.newPrice}</span>
            </div>

            {/* Color Options */}
            <div className="flex justify-center mt-4 gap-2">
              {product.colors.map((color, index) => (
                <span
                  key={index}
                  className={`w-4 h-4 rounded-full ${color}`}
                ></span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}