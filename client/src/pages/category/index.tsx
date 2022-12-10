import React from "react";
import styles from "../../styles/modules/CategoryProduct.module.css";
import CategoryItemProduct from "../../components/CategoryItemProduct";

export default function Index() {
  return (
    <div className="">
      <div className={`${styles.category_hero_section} px-5 `}>
        <div className="col-6 ">
          <h1 className={styles.heading}>
            Read The <span className={styles.red_span}>Blogs</span> And <span className={styles.red_span}>Get</span> To Know More About <span className={styles.red_span}>Us</span> .
          </h1>
          <p className={styles.para}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, accusantium nihil quo repellat sapiente fugiat sunt temporibus cum!</p>
        </div>
      </div>
      <CategoryItemProduct />
    </div>
  );
}
