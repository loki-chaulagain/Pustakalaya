import Image from "next/image";
import React from "react";
import demo from "../assets/book.avif";

const products = [{ name: "loki" }, { name: "loki" }, { name: "loki" }, { name: "loki" }];

export default function favourite() {
  return (
    <div className="container">
      <div className="row mt-5 pt-5">
        <div className="col-3">
          <h4 className="">Categories</h4>
          <hr />
          <div>
            <h6 className="py-2 favourite_cat">Horror & Thriller</h6>
            <h6 className="py-2 favourite_cat">Horror & Thriller</h6>
            <h6 className="py-2 favourite_cat">Horror & Thriller</h6>
            <h6 className="py-2 favourite_cat">Horror & Thriller</h6>
            <h6 className="py-2 favourite_cat">Horror & Thriller</h6>
          </div>
        </div>
        <div className=" col">
          <div className="row">
            {products &&
              products.map((product: any, index) => (
                <div
                  key={index}
                  className="col-6 d-flex gap-4 mb-4 px-3 py-2 align-items-center   rectangular_product_card">
                  <Image
                    className=" no_selection cp"
                    src={demo}
                    objectFit="scale-down"
                    alt="img"
                    height={130}
                    width={100}
                  />
                  <div>
                    <p className=" h6 my-0">Apple iPad Mini %2356</p>
                    <small>Rating here</small>
                    <p className="h5">
                      <span className="color_orange"> $24.00 </span> <span className="text-muted">$15.00</span>
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
