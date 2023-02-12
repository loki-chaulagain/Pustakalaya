import Image from "next/image";
import React from "react";
import tv from "../assets/bookDemo.jpg";
import { useGetCategoriesQuery } from "../redux/api/globalApi";

export default function CategoriesSection() {
  const { data: categories } = useGetCategoriesQuery();

  return (
    <div className=" container">
      <h5 className="text_color">Explore More Categories</h5>
      <hr />
      <div className="row">
        {categories &&
          categories.map((product: any, index) => (
            <div
              key={index}
              className="col-12 col-sm-6 mb-4">
              <div className="row d-flex  m-0 p-0 align-items-center justify-content-between gap-4 category_card">
              <div className="col p-0  d-flex   ">
                <div className="category_img_div">

                  <Image
                    className=" no_selection cp  "
                    src={tv}
                    objectFit="cover"
                    alt="img"
                    layout="fill"
                  />
                </div>
                </div>

                <div className="col">
                  <h5 className="text_color mt-2">Category Name</h5>
                  <h6 className="d-flex align-items-center cp color_yellow gap-2 mt-2">
                    Shop More <span className="fz30">→</span>{" "}
                  </h6>
                </div>

                
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
