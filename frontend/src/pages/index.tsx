import React from "react";
import AboutProductSection from "../components/home/AboutProductSection";
import HeroCarousel from "../components/home/HeroCarousel";
import Newsletter from "../components/Newsletter";
import ProductSection from "../components/ProductSection";
import AboutProductSection2 from "../components/home/AboutProductSection2";
import { useGetBannersQuery, useGetProductsQuery } from "../redux/api/globalApi";

export default function Index() {
  const { data: banners } = useGetBannersQuery();
  const { data: products } = useGetProductsQuery();

  return (
    <div className="matter">
      <HeroCarousel banners={banners} />
      <ProductSection  />
      <AboutProductSection />
      <ProductSection products={products} />
      <Newsletter />
      <AboutProductSection2 />
    </div>
  );
}
