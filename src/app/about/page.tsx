import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="bg-white">
      {/* Navbar Section */}
      <nav className="bg-white text-black">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          {/* Left: Logo */}
          <div className="text-black text-xl font-bold">Bandage</div>

          {/* Center: Links */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-black hover:text-gray-400">
              Home
            </Link>
            <Link href="product" className="text-black hover:text-gray-400">
              Product
            </Link>
            <Link href="pricing" className="text-black hover:text-gray-400">
              Pricing
            </Link>
            <Link href="contact" className="text-black hover:text-gray-400">
              Contact
            </Link>
          </div>

          {/* Right: Login & Button */}
          <div className="flex items-center space-x-6">
            <a href="#login" className="text-blue-500 hover:underline">
              Login
            </a>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-600">
              Become a member
              <span className="ml-2">&rarr;</span>
            </button>
          </div>
        </div>
      </nav>

      {/* About Us Section */}
      <section className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center">
            <h4 className="text-sm font-semibold text-black uppercase mb-8">
              About Company
            </h4>
            <h1 className="text-5xl font-bold text-black mt-2">ABOUT US</h1>
            <p className="text-black mt-4">
              We know how large objects will act, <br /> but things on a small
              scale.
            </p>
            <button className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-400">
              Get Quote Now
            </button>
          </div>
          <div className="flex justify-center">
            <Image
              width={500}
              height={500}
              src="/shopping-girl.png"
              alt="Shopping Bags"
              className="w-full max-w-sm rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
          <div>
            <h4 className="text-sm font-semibold text-red-700">
              Problems Trying
            </h4>
            <h2 className="text-xl font-bold text-gray-900">
              Met minim Mollie non desert <br /> Alamo est sit cliquey dolor do{" "}
              <br /> met sent.
            </h2>
          </div>
          <div>
            <p className="text-black text-center">
              Problems trying to resolve the conflict between the two major
              realms of <br />
              Classical physics: Newtonian mechanics.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-3xl font-bold text-gray-900">15K</h3>
            <p className="text-black">Happy Customers</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900">150K</h3>
            <p className="text-black">Monthly Visitors</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900">15</h3>
            <p className="text-black">Countries Worldwide</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900">100+</h3>
            <p className="text-black">Top Partners</p>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="container mx-auto px-6 py-12">
        <div className="relative justify-items-center">
          <Image
            width={500}
            height={500}
            src="/image-1.png"
            alt="Video Thumbnail"
            className="w-auto h-200 object-cover rounded-lg shadow-lg"
          />
          <button className="absolute inset-0 flex items-center justify-center">
            <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.752 11.168l-6.336 3.422a1 1 0 01-1.416-.9V8.31a1 1 0 011.416-.9l6.336 3.422a1 1 0 010 1.8z"
                />
              </svg>
            </div>
          </button>
        </div>
      </section>
      <section className="text-center py-16 px-4">
              <h2 className="text-3xl font-bold">Meet Our Team</h2>
              <p className="pt-4">Problem trying to resolve the conflict between <br /> the two major realms of Classical physics: Newtonian mechanics</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
                {[7,8,5].map((num) => (
                  <div key={num} className="text-center">
                    <Image src={`/team-${num}.png`} alt="Team Member" width={200} height={200} className=" mx-auto" unoptimized />
                    
                  </div>
                ))}
              </div>
            </section>

            <section className="text-center py-16 px-4">
              <h2 className="text-3xl font-bold">Big Companies Are Here</h2>
              <p className="pt-4">Problem trying to resolve the conflict between <br /> the two major realms of Classical physics: Newtonian mechanics</p>
              
                <Image src="/logos-2.png"
                alt="logo"
                width="1200"
                height="1200" 
                className=" w-full h-full items-center pt-8"/>
                
            </section>
            <section>
            <div className="flex flex-col md:flex-row items-center justify-between bg-blue-600 text-white p-10 md:p-20">
      {/* Left Side Text */}
      <div className="md:w-1/2 text-center md:text-left">
        <p className="text-sm font-semibold uppercase">Work With Us</p>
        <h1 className="text-3xl md:text-5xl font-bold my-4">Now Lets Grow Yours</h1>
        <p className="text-sm md:text-base mb-6">
          The gradual accumulation of information about atomic and <br /> small-scale behavior during the first quarter of the 20th.
        </p>
        <button className="border border-white px-6 py-2 rounded-lg hover:bg-white hover:text-blue-600 transition">
          Button
        </button>
      </div>

      {/* Right Side Image */}
      <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
        <Image
          src="/team-11.png"
          alt="Hero Image"
          width={400}
          height={500}
          className="rounded-lg"
        />
      </div>
    </div>
  


            </section>

    </div>
  );
}