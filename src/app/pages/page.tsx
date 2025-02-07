import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from 'next/link';

export default function TeamPage() {
  return (
    <div className="bg-white text-black">
      {/* Navbar */}
      <header className="flex flex-wrap justify-between items-center p-6 shadow-md">
        <h1 className="text-xl font-bold">Bandage</h1>
        <nav>
        <ul className="hidden md:flex space-x-8 text-gray-600">
            <Link href="/" className="hover:text-blue-500 cursor-pointer">Home</Link>
            <Link href="product" className="hover:text-blue-500 cursor-pointer">Product</Link>
            <Link href="pricing"className="hover:text-blue-500 cursor-pointer">Pricing</Link>
            <Link href="contact"className="hover:text-blue-500 cursor-pointer">Contact</Link>
          </ul>
        </nav>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2 md:mt-0">Become a member</button>
      </header>

      {/* Hero Section */}
      <section className="text-center py-16 px-4">
        <h2 className="text-black text-sm">WHAT WE DO</h2>
        <h1 className="text-3xl md:text-4xl font-bold">Innovation tailored for you</h1>
        <p className='pt-4'>Home | Team</p>
      </section>

      {/* Gallery */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-6">
        <Image src="/mode-1.png" alt="Model" width={400} height={400} className="rounded-lg w-full" />
        <Image src="/mode-2.png" alt="Model" width={400} height={400} className="rounded-lg w-full" />
        <Image src="/mode-3.png" alt="Model" width={400} height={400} className="rounded-lg w-full" />
        <Image src="/mode-4.png" alt="Model" width={400} height={400} className="rounded-lg w-full" />
        <Image src="/mode-5.png" alt="Model" width={400} height={400} className="rounded-lg w-full" />
      </section>

      {/* Team Section */}
      <section className="text-center py-16 px-4">
        <h2 className="text-2xl font-bold">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
          {[1,2, 4, 5, 6, 7, 8, 9, 10].map((num) => (
            <div key={num} className="text-center">
              <Image src={`/team-${num}.png`} alt="Team Member" width={200} height={200} className=" mx-auto" unoptimized />
              <h3 className="font-bold mt-2">Username</h3>
              <p className="text-gray-700">Profession</p>
            </div>
          ))}
        </div>
      </section>

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
}