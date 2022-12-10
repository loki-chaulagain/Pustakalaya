import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import ReusableProductSection from "../../components/ReusableProductSection";
import SectionHeader from "../../components/SectionHeader";
import SingleProductSection from "../../components/SingleProductSection";
import demo from "../../assets/bookDemo.jpg";
import ProductSection from "../../components/ProductSection";

export default function ID() {
  const router = useRouter();
  const slug = router.query.id;

  // const [products, setProducts] = useState([]);
  // const fetchAllProducts = async () => {
  //   try {
  //     const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/product`);
  //     setProducts(res.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const products = [
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
  ];

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
    // fetchAllProducts();
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
        <ProductSection products={products} />
      </div>
    </div>
  );
}
