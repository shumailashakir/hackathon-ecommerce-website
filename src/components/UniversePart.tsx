import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center justify-between">
      {/* Left Image Section */}
      <div className="w-full md:w-1/2 mb-6 md:mb-0">
        <Image
          src="/couple.jpg" // Replace with the actual path to your image
          alt="Neural Universe"
          width={800}
          height={600}
          className="rounded-lg object-cover"
        />
      </div>

      {/* Right Content Section */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <p className="text-gray-500 uppercase tracking-wide mb-2">Summer 2020</p>
        <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
          Part of the Neural <br /> Universe
        </h1>
        <p className="text-gray-600 mb-6">
          We know how large objects will act <br /> but things on a small scale.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
          <button className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600">
            Buy Now
          </button>
          <button className="border border-green-500 text-green-500 px-6 py-2 rounded-md hover:bg-green-50">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}