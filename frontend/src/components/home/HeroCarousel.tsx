import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import demo from "../../assets/book.avif";
import { useGetBannersQuery } from "../../redux/api/globalApi";

const HeroCarousel = () => {
  const { data: banners, isLoading, isError } = useGetBannersQuery();
  if (isLoading) {
    <div>Loading ...</div>;
  }

  if (isError) {
    <div>Error ...</div>;
  }

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
                  src={demo}
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
