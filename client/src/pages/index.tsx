import axios from "axios";
import React, { useEffect, useState } from "react";
import AboutProductSection from "../components/home/AboutProductSection";
import HeroCarousel from "../components/home/HeroCarousel";
import Newsletter from "../components/Newsletter";
import demo from "../assets/book.avif";
import ProductSection from "../components/ProductSection";
import AboutProductSection2 from "../components/home/AboutProductSection2";

export default function Index() {
  const banners = [
    {
      image: demo,
    },

    {
      image: demo,
    },
  ];

  const featuredProducts = [
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

  // const [services, setServices] = useState([]);
  // const fetchAllService = async () => {
  //   try {
  //     const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/service`);
  //     setServices(res.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchAllService();
  // }, []);

  return (
    <div className="matter">
      <HeroCarousel banners={banners} />
      <ProductSection products={featuredProducts} />
      <AboutProductSection />
      <ProductSection products={featuredProducts} />
      <Newsletter />
      <AboutProductSection2 />
    </div>
  );
}
