import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import OurStandards from "../../components/OurStandards";
import ReusableProductSection from "../../components/ReusableProductSection";
import SectionHeader from "../../components/SectionHeader";
import SingleProductSection from "../../components/SingleProductSection";

export default function ID() {
  const router = useRouter();
  const slug = router.query.id;

  const [products, setProducts] = useState([]);
  const fetchAllProducts = async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/product`);

      setProducts(res.data);
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

  const [singleProduct, setSingleProduct] = useState({});
  const fetchSingleProduct = async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/product?url=${slug}`);
      setSingleProduct(res.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllProducts();
    fetchAllStandard();
    fetchSingleProduct();
  }, [slug]);

  return (
    <div className="container matter ">
      <SingleProductSection singleProduct={singleProduct} />
      <div className="mt-5">
        <SectionHeader
          title="Similar Products"
          description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered "
        />
        <ReusableProductSection products={products} />
      </div>
      {/* <OurStandards standards={standards} /> */}
    </div>
  );
}
