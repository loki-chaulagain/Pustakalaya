import React, { useState } from "react";
import styles from "../styles/modules/ReusableProduct.module.css";
import Image from "next/image";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import Link from "next/link";

const ReusableProductSection = ({ products }: any) => {
  // const [liked, setLiked] = useState(false);
  // const handleLike = () => {
  //   setLiked(true);
  // };

  // const handleDisLike = () => {
  //   setLiked(false);
  // };
  return (
    <div className="container ">
      <div className="row cursor_pointer pb-5">
        {products &&
          products.map((product: any, index: any) => (
            <div
              key={index}
              className="col-12 col-md-6 col-xl-4  px-2 pb-5">
              <div className={`${styles.featured_product_item} `}>
                {/* <div
                  onClick={liked ? handleDisLike : handleLike}
                  className={styles.favourite_icon}>
                  {liked ? <AiFillHeart /> : <AiOutlineHeart />}
                </div>
                 */}
                <Link href={`/product/${product.url}`}>
                <div className={`${styles.image_div}`}>
                  <Image
                    src={`${process.env.NEXT_PUBLIC_CLOUDINARY_URL_SECURE}/${product.image}`}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                </Link>

                <div className="d-flex flex-column align-items-center  justify-content-center">
                  <h5 className="py-3">{product.name}</h5>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ReusableProductSection;
