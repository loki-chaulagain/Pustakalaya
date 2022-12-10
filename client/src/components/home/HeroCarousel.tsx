import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const HeroCarousel = ({ banners }: any) => {
  return (
    <>
      <Swiper
        navigation={true}
        loop={true}
        modules={[Navigation]}
        className="mySwiper">
        {banners &&
          banners.map((banner: any, index: any) => (
            <SwiperSlide key={index}>
              <div className="item_div">
                <Image
                  src={banner.image}
                  layout="fill"
                  objectFit="cover"
                  alt="img"
                />
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};

export default HeroCarousel;
