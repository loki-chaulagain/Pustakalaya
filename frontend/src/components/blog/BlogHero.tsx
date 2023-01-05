import React from "react";
import styles from "../../styles/modules/Career.module.css";

const BlogHero = () => {
  return (
    <div>
      <div className={`${styles.career_hero_wrapper} row `}>
        <div className="d-flex flex-column justify-content-center ">
          <h1 className={`${styles.career_hero_heading}`}>
            Read The <span className={styles.red_span}>Blogs</span> And <span className={styles.red_span}>Get</span> To Know More About <span className={styles.red_span}>Us</span> .
          </h1>
          <p className={styles.career_hero_para}>Quick and easy to use the most important thing for selling products on mobile!</p>
        </div>
      </div>
    </div>
  );
};

export default BlogHero;
