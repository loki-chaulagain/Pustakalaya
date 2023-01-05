import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import styles from "../../styles/modules/About.module.css";

const Testimonial = ({ reviews }: any) => {
  return (
    <div className={`${styles.testimonial_wrapper} `}>
      <div className="d-flex flex-column align-items-center text_color_blue">
        <div className="d-flex flex-column align-items-center text_color_blue gap-2 pb-4">
          <h2 className="p-0 m-0 h2 fw-semibold text_muted_heading ">What Client Says About US</h2>
        </div>
      </div>

      <Swiper
        navigation={true}
        modules={[Navigation]}
        loop={true}
        loopFillGroupWithBlank={true}
        className="mySwiper pt-5">
        {reviews &&
          reviews.map((review: any, index: any) => (
            <SwiperSlide>
              <div className={`${styles.each_review_div} text_color_blue `}>
                <div className="quote_wrapper d-flex flex-column">
                  <blockquote className="text " />
                  <p className="text-center global_para ">{review.description}</p>
                </div>
                <div className="d-flex flex-column align-items-center mt-5">
                  <p className="h6">--{review.name}--</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
