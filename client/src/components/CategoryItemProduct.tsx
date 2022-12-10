import React, { useState } from "react";
import styles from "../styles/modules/CategoryProduct.module.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Image from "next/image";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import Link from "next/link";

const CategoryItemProduct = ({ catProducts,slug}: any) => {
  const [liked, setLiked] = useState(false);
  const handleLike = () => {
    setLiked(true);
  };

  const handleDisLike = () => {
    setLiked(false);
  };

  return (
    <div className={`${styles.latest_product} mt-5 mb-4`}>
      <div className="container ">
      <div className="container d-flex  justify-content-center mb-4">
        <div
          className="alert alert-warning w-100 text-center rounded-0"
          role="alert">
          <h4> Category : {slug}</h4>
        </div>
      </div>
        <div className="row ">
          {catProducts &&
            catProducts.map((product: any, index: any) => (
              <Link href={`/product/${product.url}`}>
                <div
                  key={index}
                  className={`${styles.category_item_wrapper} col-4 px-2 mb-5`}>
                  <div className={`${styles.category_item} `}>
                    <div
                      onClick={liked ? handleDisLike : handleLike}
                      className={styles.love_icon_div}>
                      {liked ? <AiFillHeart /> : <AiOutlineHeart />}
                    </div>

                    <div className={`${styles.image_div}`}>
                      <Image
                        src={`${process.env.NEXT_PUBLIC_CLOUDINARY_URL_SECURE}/${product.image}`}
                        layout="fill"
                        objectFit="cover"
                        alt="img"
                      />
                    </div>

                    <div className="d-flex flex-column text_color_white align-items-center">
                      <h5>{product.name}</h5>
                      <p>NRS {product.price}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryItemProduct;
