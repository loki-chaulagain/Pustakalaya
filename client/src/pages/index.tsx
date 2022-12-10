import axios from "axios";
import React, { useEffect, useState } from "react";
import AboutProductSection from "../components/AboutProductSection";
import AboutProductSection2 from "../components/AboutProductSection2";
import FeaturedProduct from "../components/FeaturedProduct";
import HeroCarousel from "../components/home/HeroCarousel";
import ImageSection from "../components/ImageSection";
import Newsletter from "../components/Newsletter";
import demo from "../assets/bookDemo.jpg";
import TopSellingBooks from "../components/TopSellingBooks";

export default function Index() {
  const banners = [
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

  const [eventBanners, setEventBanners] = useState([]);
  const fetchAllEventBanner = async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/eventBanner`);
      setEventBanners(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const [services, setServices] = useState([]);
  const fetchAllService = async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/service`);
      setServices(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const categories = [
    {
      image: demo,
      name: "Horror",
      description: "1111",
    },

    {
      image: demo,
      name: "Thriller",
      description: "222222",
    },

    {
      image: demo,
      name: "Romance",
      description: "3333333333",
    },

    {
      image: demo,
      name: "Drama",
      description: "44444444",
    },
  ];
  const [topSellingProducts, setTopSellingProducts] = useState([]);
  const fetchAllTopSellingProduct = async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/product?topSelling=1`);
      setTopSellingProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllService();
    fetchAllEventBanner();
    fetchAllTopSellingProduct();
  }, []);

  return (
    <div className="matter">
      <HeroCarousel banners={banners} />
      {/* <OurServices /> */}
      {/* <DiscountOffer eventBanners={eventBanners} /> */}
      <FeaturedProduct featuredProducts={featuredProducts} />
      <AboutProductSection />
      <ImageSection categories={categories} />
      <TopSellingBooks featuredProducts={featuredProducts} />
      <AboutProductSection2 />
      <Newsletter />
    </div>
  );
}
