import React from "react";
import styles from "../../styles/modules/ProductSection.module.css";
import demo from "../../assets/bookDemo.jpg";
import Image from "next/image";

const AboutProductSection2 = () => {
  return (
    <div className={`${styles.about_product_section} container `}>
      <div className="row px-2 p-sm-0">
        <div className="col-12  position-relative  order-1 about_product_img_div overflow-hidden rounded-1  ">
          <Image
            src={demo}
            alt=""
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutProductSection2;
