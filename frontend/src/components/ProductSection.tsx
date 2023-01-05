import React from "react";
import styles from "../styles/modules/Product.module.css";
import Image from "next/image";
import Link from "next/link";
import demo from "../assets/book.avif";

const ProductSection = ({ products }: any) => {
  const counter = 6;

  return (
    <div className="container mt-5 pt-5">
      <div className="row cursor_pointer pb-5">
        {/* {products &&
          Array(counter).fill(
            <div className="col-12  col-md-6 col-xl-4  px-1 pb-4">
              <div className="product_skeleton">
                <div className="product_skeleton_div1 "></div>
                <div className="product_skeleton_div2 w-50"></div>
              </div>
            </div>
          )} */}

        {products &&
          products.map((product: any, index: any) => (
            <div
              key={index}
              className="col-12 col-md-6 col-xl-4  px-2 pb-5">
              <div className={`${styles.product_item} `}>
                <div className={`${styles.product_content}  `}>
                  <p className="h4 text_color">Lorem, ipsum dolor.</p>
                  <p className="text-muted text_color fw-semibold"> <span className="color_orange">Author</span> : Binod Dhami</p>
                  <p className="text-muted text_color fw-semibold"><span className="color_orange">Published Year</span> :2022</p>
                </div>
                <Link href={`/product/${product.url}`}>
                  <div className={`${styles.image_only_div}`}>
                  <Image
                    src={demo}
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

export default ProductSection;
