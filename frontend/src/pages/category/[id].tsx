import React, { useEffect, useState } from "react";
import CategoryItemProduct from "../../components/CategoryItemProduct";
import { useRouter } from "next/router";
import axios from "axios";
import CategoryCarousel from "../../components/CategoryCarousel";
import demo from "../../assets/bookDemo.jpg";
import ProductSection from "../../components/ProductSection";

export default function Id() {
  // const router = useRouter();
  // const slug = router.query.id;

  const category = [
    {
      image: demo,
    },

    {
      image: demo,
    },
  ];

  const catProducts = [
    {
      image: demo,
      name: "1",
      description: "1111",
    },

    {
      image: demo,
      name: "2",
      description: "222222",
    },

    {
      image: demo,
      name: "3",
      description: "3333333333",
    },

    {
      image: demo,
      name: "4",
      description: "44444444",
    },

    {
      image: demo,
      name: "1",
      description: "1111",
    },

    {
      image: demo,
      name: "2",
      description: "222222",
    },

    {
      image: demo,
      name: "3",
      description: "3333333333",
    },

    {
      image: demo,
      name: "4",
      description: "44444444",
    },
  ];

  // const [catProducts, setCatProducts] = useState([]);
  // const fetchCategoryProduct = async () => {
  //   try {
  //     const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/product?slug=${slug}`);
  //     setCatProducts(res.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchCategoryProduct();
  // }, [router.query.id]);

  return (
    <div className="">
      <CategoryCarousel category={category} />
      <ProductSection
        products={catProducts}
        // slug={slug}
      />
    </div>
  );
}
