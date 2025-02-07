import ClassicProduct from "@/components/ClassicProduct";
import Editorspick from "@/components/Editorspick";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import UniversePart from "@/components/UniversePart";
import FeaturedPost from "@/components/FeaturedPosts";
import Product from "@/components/ProductCard";


export default function Home() {
  return (
    <div >
      <Navbar />
      <Hero />
    <Editorspick />
    <Product />
     <ClassicProduct />
     <UniversePart />
     <FeaturedPost />


    </div>
  );
}

