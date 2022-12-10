import React from "react";
import styles from "../../styles/modules/About.module.css";
import { BsBag } from "react-icons/bs";
import { BsRecycle } from "react-icons/bs";

const WhoWeAre = () => {
  return (
    <div className="row">
      <div className=" d-flex flex-column align-items-center justify-content-center text_color_blue">
        <div className="d-flex flex-column align-items-center align-items-center  ">
          <h1 className="h2 fw-semibold  text_muted_heading"> WHO WE ARE</h1>
          <p>A Reliable Name For Quality Housewares !</p>
        </div>
        <p className="pt-4 global_para ">Gem Plastics is a plastic manufacturing company, established in 1986, with the main objective of providing reliable, quality, and durable products to customers. We supply most all of the household materials like buckets, mugs, basins, containers, etc, that are supplied all over the country.</p>

        <div className="row pt-5">
          <div className="col-12 col-md-6 d-flex flex-column align-items-center mt-5 mt-md-0   text_color_blue">
            <BsBag
              size={35}
              className={`${styles.about_icon}`}
            />
            <h3 className="pt-2 text_muted_heading">Quality</h3>
            <p className="pt-2 global_para">We are continuously introducing new, interesting, quality, and innovative products considering the price range. We have also been working as a wholesaler all over Nepal with our efficient and reliable service.</p>
          </div>

          <div className="col-12 col-md-6 d-flex flex-column align-items-center mt-5 mt-md-0  text_color_blue">
            <BsRecycle
              size={35}
              className={`${styles.about_icon}`}
            />
            <h3 className="pt-2 text_muted_heading">Reliable</h3>
            <p className="pt-2 global_para">For a long time, we have been committed to producing the best quality plastic housewares, designed and formulated by our experienced personnel to meet the requirements of the clients and customers.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
