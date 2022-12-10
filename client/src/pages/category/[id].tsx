import React, { useEffect, useState } from "react";
import CategoryItemProduct from "../../components/CategoryItemProduct";
import { useRouter } from "next/router";
import axios from "axios";
import OurStandards from "../../components/OurStandards";
import CategoryCarousel from "../../components/CategoryCarousel";

export default function Id() {
  const router = useRouter();
  const slug = router.query.id;

  const [category, setCategory] = useState([]);
  const fetchSingleCategory = async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/category?url=${slug}`);
      setCategory(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const [standards, setStandards] = useState([]);
  const fetchAllStandard = async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/standard`);

      setStandards(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const [catProducts, setCatProducts] = useState([]);
  const fetchCategoryProduct = async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/product?slug=${slug}`);
      setCatProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllStandard();
    fetchCategoryProduct();
    fetchSingleCategory();
  }, [router.query.id]);

  return (
    <div className="">
      <CategoryCarousel category={category} />
      <CategoryItemProduct
        catProducts={catProducts}
        slug={slug}
      />
      {/* <OurStandards standards={standards} /> */}
    </div>
  );
}
