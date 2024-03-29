import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdDeleteOutline, MdOutlineClear } from "react-icons/md";
import demo from "../assets/book.avif";
import { useGetCategoriesQuery } from "../redux/api/globalApi";
import { IoMdAdd } from "react-icons/io";
import { AiOutlineMinus } from "react-icons/ai";

const products = [{ name: "loki" }, { name: "loki" }, { name: "loki" }, { name: "loki" }];

export default function Cart() {
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

  const [quantity, setQuantity] = useState(1);
  const quantityInc = () => {
    // setQuantity(quantity + 1);
  };
  const quantityDec = () => {
    // setQuantity(quantity - 1);
  };

  return (
    <div
      className="px-5 matter   d-flex align-items-center "
      style={{ minHeight: "70vh" }}>
      <div className="row d-flex  align-items-center justify-content-center ">
        <div className=" col">
          <div className="row ">
            <h4 className="text_color">All Cart Products (4)</h4>
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
                        <div className="border px-3 py-1 d-flex gap-2 align-items-center  no_selection">
                          <AiOutlineMinus
                            onClick={quantityDec}
                            size={24}
                            className="cp"
                          />
                          {quantity}
                          <IoMdAdd
                            onClick={quantityInc}
                            size={24}
                            className="cp"
                          />
                        </div>

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
          <hr />
          <h6 className="text_color">Delivery :Nrs 43 </h6>
          <h6 className="mt-2 text_color">Product : Nrs 5657.75</h6>
          <hr className="w-25 text_color" />
          <h5 className="text_color">Total : Nrs 5657.75</h5>
        </div>

        {/* ------------------------------ */}
        <div className="col-12   col-md-6 col-xl-4 mt-5 com-md-0   ">
          <div className="px-4 cart_payment_info py-5 rounded-3">
            <h1 className="fw-bold text_blue h1">Payment Info</h1>
            <h5 className="h5 text_blue mb-3">Choose your payemet option</h5>
            <div className="form-check mb-2">
              <input
                className="form-check-input select_color_input_custom "
                type="radio"
                name="flexRadioDefault"
                id="credit"
              />
              <label
                className="form-check-label select_size_input_custom_label cp text_blue"
                htmlFor="credit">
                Credit Card
              </label>
            </div>

            <div className="form-check mb-2">
              <input
                className="form-check-input  select_color_input_custom"
                type="radio"
                name="flexRadioDefault"
                id="eSewa"
              />
              <label
                className="form-check-label select_size_input_custom_label cp text_blue"
                htmlFor="eSewa">
                e-Sewa
              </label>
            </div>

            <div className="form-check mb-2">
              <input
                className="form-check-input select_color_input_custom"
                type="radio"
                name="flexRadioDefault"
                id="cash"
              />
              <label
                className="form-check-label select_size_input_custom_label cp text_blue"
                htmlFor="cash">
                Cash On Delivery
              </label>
            </div>

            <h5 className="h5 mt-4 text_blue mb-3">Your Payment Details</h5>
            <input
              className="form-control form-control-lg rounded-1 py-3 mb-4 checkout_input"
              type="text"
              placeholder="Full Name"
            />

            <input
              className="form-control form-control-lg rounded-1 py-3 mb-4 checkout_input"
              type="text"
              placeholder="Card Number"
            />

            <div className="row">
              <div className="col">
                <input
                  className="form-control form-control-lg rounded-1 py-3 mb-4 checkout_input"
                  type="text"
                  placeholder="Exp Date"
                />
              </div>
              <div className="col">
                <input
                  className="form-control form-control-lg rounded-1 py-3 mb-4 checkout_input"
                  type="text"
                  placeholder="CVV"
                />
              </div>
            </div>
            <button
              type="button"
              className="btn checkout_button py-3 fw-semibold w-100 rounded-1">
              Confirm
            </button>
          </div>
        </div>
        <hr className="mt-5" />
        <Link href={"/"}>
          <h5 className="text_blue cp_hover mb-5 pb-5">
            {" "}
            <span className="h3">←</span> Continue Shopping
          </h5>
        </Link>
      </div>
    </div>
  );
}
