import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Autoplay } from "swiper";
import SectionHeader from "./SectionHeader";
import styles from "../styles/modules/OurStandard.module.css";
import demo from "../assets/bookDemo.jpg";
import Image from "next/image";

const OurServices = () => {
  return (
    <div className={`${styles.our_standard_wrapper} container`}>
      <SectionHeader
        title={"Lunching Soon Books"}
        description={"Our latest item collection of 2021"}
      />
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        slidesPerGroup={1}
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
        }}
        freeMode={true}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, FreeMode]}
        breakpoints={{
          1650: {
            slidesPerView: 4,
            spaceBetween: 5,
          },
          1300: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          700: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          500: {
            slidesPerView: 1,
          },
        }}
        className="mySwiper">
        <SwiperSlide>
          <div className={styles.image_div}>
            <Image
              src={demo}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={styles.image_div}>
            <Image
              src={demo}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={styles.image_div}>
            <Image
              src={demo}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={styles.image_div}>
            <Image
              src={demo}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default OurServices;
