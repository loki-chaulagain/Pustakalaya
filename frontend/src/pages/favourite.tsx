import Image from "next/image";
import React from "react";
import { toast } from "react-hot-toast";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdDeleteOutline } from "react-icons/md";
import demo from "../assets/book.avif";
import { useGetCategoriesQuery } from "../redux/api/globalApi";
const products = [{ name: "loki" }, { name: "loki" }, { name: "loki" }, { name: "loki" }];

export default function Favourite() {
  const { data: categories } = useGetCategoriesQuery();

  const removesSuccess = () => toast(" ✅ Delete Success");
  const addedCartSuccess = () => toast(" ✅ Added To Cart");
  const somethingWentWrong = () => toast(" ❌ Something Went Wrong");

  const handleRemove = async () => {
    try {
      removesSuccess();
    } catch (error) {
      console.log(error);
      somethingWentWrong();
    }
  };

  const handleAddToCart = async () => {
    try {
      addedCartSuccess();
    } catch (error) {
      console.log(error);
      somethingWentWrong();
    }
  };

  return (
    <div
      className="container matter  d-flex align-items-center "
      style={{ minHeight: "70vh" }}>
      <div className="row d-flex  justify-content-center ">
        <div className="col-3">
          <h4 className="">Categories</h4>
          <hr className="my-0 mb-4 mt-2" />
          <div>
            {categories &&
              categories.map((category: any, index: any) => (
                <h6
                  key={index}
                  className="py-2 favourite_cat">
                  {category.name}
                </h6>
              ))}
          </div>
        </div>
        <div className=" col">
          <div className="row ">
            <h4 className="text_color">Your Favourite Products</h4>
            <hr className="my-0 mb-4 mt-2" />
            {products &&
              products.map((product: any, index) => (
                <div
                  key={index}
                  className="col-6">
                  <div className="  d-flex gap-4 mb-4 p-0 align-items-center  rectangular_product_card">
                    <Image
                      className=" no_selection cp"
                      src={demo}
                      objectFit="cover"
                      alt="img"
                      height={180}
                      width={170}
                    />
                    <div className="d-flex flex-column gap-1 ">
                      <small className="text-muted"> Category Name</small>
                      <p className="h6 text_color mb-0 ">Apple iPad Mini G2356</p>
                      <p className="h6 text_color mb-0 ">Published Year : 2002</p>
                      <p className="text_color h6 mb-0 ">
                        Author : <span>Lokendra </span>{" "}
                      </p>
                      <p className="h5 ">
                        <span className="color_yellow">$600.00</span> <span className="text-muted">$400</span>
                      </p>
                      <div className="d-flex align-items-center text-muted gap-4 mt-2">
                        <div className="icon_bg_div p-1 rounded-circle">
                          <MdDeleteOutline
                            onClick={handleRemove}
                            size={24}
                            className="cp"
                          />
                        </div>
                        <div className="icon_bg_div p-1 rounded-circle">
                          <AiOutlineShoppingCart
                            onClick={handleAddToCart}
                            size={23}
                            className="cp"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
