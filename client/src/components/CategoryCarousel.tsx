import Image from "next/image";
import React from "react";
import demo from "../assets/bookDemo.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const CategoryCarousel = ({ category }: any) => {
  console.log(category);
  return (
    <>
      {category && (
        <Swiper className="mySwiper">
          <SwiperSlide>
            <div className="item_div">
              <Image
                // src={`${process.env.NEXT_PUBLIC_CLOUDINARY_URL_SECURE}/${category.image}`}
                src={demo}
                layout="fill"
                objectFit="cover"
                alt="img"
              />

              <div className="home_banner_text_area text-center ">
                <h2 className="banner_heading ">{category.name}r</h2>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      )}
    </>
  );
};

export default CategoryCarousel;
