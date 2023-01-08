import React from "react";
import AboutProductSection from "../components/home/AboutProductSection";
import HeroCarousel from "../components/home/HeroCarousel";
import Newsletter from "../components/Newsletter";
import ProductSection from "../components/ProductSection";
import AboutProductSection2 from "../components/home/AboutProductSection2";
import CategoriesSection from "../components/CategorySection";

export default function Index() {
  return (
    <div className="matter">
      <HeroCarousel />
      <div className="mt-5">
        <ProductSection title="Most Selling Products" />
      </div>
      <ProductSection title="Latest Products" />
      <CategoriesSection />
      <AboutProductSection />
      <ProductSection title="Latest Products" />
      <Newsletter />
      <AboutProductSection2 />
    </div>
  );
}
