import React, {  } from "react";
import CategoryCarousel from "../../components/CategoryCarousel";
import demo from "../../assets/bookDemo.jpg";
import ProductSection from "../../components/ProductSection";
import CategoriesSection from "../../components/CategorySection";

export default function Id() {
  const category = [
    {
      image: demo,
    },

    {
      image: demo,
    },
  ];

  return (
    <div className="">
      <CategoryCarousel category={category} />
      <div className="mt-5">
        <ProductSection title={"Category : Name Here"} />
      </div>

      <div className="mb-5">
      <CategoriesSection />
      </div>
    </div>
  );
}
