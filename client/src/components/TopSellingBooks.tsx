import React from "react";
import styles from "../styles/modules/Product.module.css";
import Image from "next/image";
import SectionHeader from "./SectionHeader";
import Link from "next/link";

const TopSellingBooks = ({ featuredProducts }: any) => {
  const counter = 6;

  return (
    <div className="container mt-5 pt-5">
      <div className="row cursor_pointer pb-5">
        <SectionHeader
          title="Top Selling Books"
          description="Popular Product Right Now "
        />

        {/* {featuredProducts &&
          Array(counter).fill(
            <div className="col-12  col-md-6 col-xl-4  px-1 pb-4">
              <div className="product_skeleton">
                <div className="product_skeleton_div1 "></div>
                <div className="product_skeleton_div2 w-50"></div>
              </div>
            </div>
          )} */}

        {featuredProducts &&
          featuredProducts.map((product: any, index: any) => (
            <div
              key={index}
              className="col-12 col-md-6 col-xl-3  px-2 pb-5">
              <div className={`${styles.featured_product_item} `}>
                <h5 className={`${styles.featured_Product_name} h5 m-0 `}>{product.name}</h5>
                <Link href={`/product/${product.url}`}>
                  <div className={`${styles.feature_product_image_div}`}>
                    <Image
                      src={product.image}
                      layout="fill"
                      objectFit="cover"
                      alt="img"
                    />
                  </div>
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TopSellingBooks;
