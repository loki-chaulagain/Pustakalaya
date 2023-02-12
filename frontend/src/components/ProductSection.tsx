import React from "react";
import Image from "next/image";
import demo from "../assets/book.avif";
import { useGetCategoriesQuery } from "../redux/api/globalApi";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { toast } from "react-hot-toast";

const ProductSection = ({ title }: any) => {
  const { data: categories } = useGetCategoriesQuery();
  const counter = 6;

  const addedCartSuccess = () => toast(" ✅ Added To Cart");
  const addedFavouriteSuccess = () => toast(" ✅ Added To Favourite");
  const somethingWentWrong = () => toast(" ❌ Something Went Wrong");

  const handleFavourite = async () => {
    try {
      addedFavouriteSuccess();
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
    <div className="container  ">
      <h4 className="text_color ">{title}</h4>
      <hr className="my-0 mb-4 mt-2" />
      <div className=" cursor_pointer pb-5 m-0 ">
        <div className="row p-0 d-flex">
          {categories &&
            categories.map((product: any, index: any) => (
              <div
                key={index}
                className="col-12 col-sm-6 col-lg-4 col-xl-3  ">
                <div className="product_card d-flex flex-column align-items-center  mb-4 gap-2 pb-3 ">
                  <Image
                    className=" no_selection cp"
                    src={demo}
                    objectFit="cover"
                    alt="img"
                    height={300}
                    width={550}
                  />
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
                      <AiOutlineHeart
                        onClick={handleFavourite}
                        size={23}
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
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
