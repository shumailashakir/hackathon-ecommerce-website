
import ClassicProduct from "@/components/ClassicProduct";
import Editorspick from "@/components/Editorspick";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard"
import UniversePart from "@/components/UniversePart";
import FeaturedPost from "@/components/FeaturedPosts";

export default function Home() {
  return (
    <div >
      <Navbar />
      <Hero />
    <Editorspick />
     <ProductCard />
     <ClassicProduct />
     <UniversePart />
     <FeaturedPost />

    </div>
  );
}
