// import React from "react";
// import * as Icons from "react-icons/fa";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/free-mode";
// import "swiper/css/pagination";
// import { FreeMode, Autoplay } from "swiper";
// import SectionHeader from "./SectionHeader";
// import styles from "../styles/modules/OurStandard.module.css";
// import { RiLeafLine } from "react-icons/ri";

// const OurStandards = ({ standards }: any) => {
//   const DynamicFaIcon = ({ name }: any) => {
//     const IconComponent = Icons[name];
//     if (!IconComponent) {
//       // Return a default one
//       return (
//         <Icons.FaHouseDamage
//           size={40}
//           className={`${styles.icon}`}
//         />
//       );
//     }
//     return (
//       <IconComponent
//         size={40}
//         className={`${styles.icon}`}
//       />
//     );
//   };

//   return (
//     <div className={`${styles.our_standard_wrapper} container`}>
//       <SectionHeader
//         title={"Our Standards"}
//         description={"Our latest item collection of 2021"}
//       />
//       <Swiper
//         slidesPerView={1}
//         spaceBetween={10}
//         slidesPerGroup={1}
//         autoplay={{
//           delay: 2000,
//           disableOnInteraction: true,
//         }}
//         freeMode={true}
//         loop={true}
//         loopFillGroupWithBlank={true}
//         pagination={{
//           clickable: true,
//         }}
//         modules={[Autoplay, FreeMode]}
//         breakpoints={{
//           1650: {
//             slidesPerView: 4,
//             spaceBetween: 5,
//           },
//           1300: {
//             slidesPerView: 3,
//             spaceBetween: 10,
//           },
//           700: {
//             slidesPerView: 2,
//             spaceBetween: 10,
//           },
//           500: {
//             slidesPerView: 1,
//           },
//         }}
//         className="mySwiper">
//         {standards &&
//           standards.map((standard: any, index: any) => (
//             <SwiperSlide
//               key={index}
//               className={`${styles.swiper_slide} py-5`}>
//               <div className={styles.item}>
//                 <DynamicFaIcon name={standard.icon} />
//                 <h5 className="mt-2">{standard.title}</h5>
//               </div>
//             </SwiperSlide>
//           ))}
//       </Swiper>
//     </div>
//   );
// };

// export default OurStandards;

import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Autoplay } from "swiper";
import SectionHeader from "./SectionHeader";
import styles from "../styles/modules/OurStandard.module.css";
import { RiExchangeLine } from "react-icons/ri";
import { MdOutlineOnlinePrediction } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";

const OurStandards = () => {
  return (
    <div className={`${styles.our_standard_wrapper} container`}>
      <SectionHeader
        title={"Our Standards"}
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
        <SwiperSlide className={`${styles.swiper_slide} py-5`}>
          <div className={styles.item}>
            <TbTruckDelivery size={40} />
            <h5 className="mt-2">Home Delivery</h5>
          </div>
        </SwiperSlide>

        <SwiperSlide className={`${styles.swiper_slide} py-5`}>
          <div className={styles.item}>
            <MdOutlineProductionQuantityLimits size={40} />
            <h5 className="mt-2">Customized Product</h5>
          </div>
        </SwiperSlide>

        <SwiperSlide className={`${styles.swiper_slide} py-5`}>
          <div className={styles.item}>
            <MdOutlineOnlinePrediction size={40} />
            <h5 className="mt-2">Online Service</h5>
          </div>
        </SwiperSlide>

        <SwiperSlide className={`${styles.swiper_slide} py-5`}>
          <div className={styles.item}>
            <RiExchangeLine size={40} />
            <h5 className="mt-2">Warranty</h5>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default OurStandards;
