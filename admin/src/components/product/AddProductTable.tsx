import React from "react";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { useCreateProductMutation, useGetCategoriesQuery } from "../../redux/api/globalApi";

export default function AddProductTable() {
  const { data: categories } = useGetCategoriesQuery();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  const handleAllField = watch();

  console.log(handleAllField);

  const createProduct =() => {
    useCreateProductMutation(handleAllField);
    reset();
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(createProduct)}
        className="customCard p-3 overflow_hidden">
        <h4>Create New Service </h4>
        <p className="customPrimaryTxtColor">To subscribe to this website, please enter your email address here. We will send updates occasionally.</p>

        <div className="row">
          <div className="col ">
            <label
              htmlFor="name"
              className="form-label mt-3 p_zero_first_cap h6 ">
              Name
            </label>
            <input
              className=" input_field_style form-control form-control-lg px-2  border-0  rounded-0"
              {...register("name", { required: "name is required" })}
              placeholder="name"
            />
            {errors.name && <p className="form_hook_error">{`${errors.name.message}`}</p>}
          </div>

          <div className="col ">
            <label
              htmlFor="image"
              className="form-label mt-3 p_zero_first_cap h6 ">
              Image
            </label>
            <input
              className=" input_field_style form-control form-control-lg px-2  border-0  rounded-0"
              {...register("image", { required: "image is required" })}
              placeholder="Image"
            />
            {errors.image && <p className="form_hook_error">{`${errors.image.message}`}</p>}
          </div>
        </div>

        <div className="row">
          <div className="col ">
            <label
              htmlFor="category"
              className="form-label mt-3 p_zero_first_cap h6 ">
              Category
            </label>

            <select
              {...register("category", { required: "category is required" })}
              className="form-select input_field_style form-control form-control-lg mb-0  border-0  rounded-0"
              aria-label="Select category">
              <option
                selected
                value={"Null"}>
                Select Category
              </option>
              {categories &&
                categories.map((category, index) => (
                  <option
                    key={index}
                    value={category.id}>
                    {category.name}
                  </option>
                ))}
            </select>
            {errors.category && <p className="form_hook_error">{`${errors.category.message}`}</p>}
          </div>

          <div className="col">
            <label
              htmlFor="priceNow"
              className="form-label mt-3 p_zero_first_cap h6 ">
              priceNow
            </label>
            <input
              className=" input_field_style form-control form-control-lg px-2  border-0  rounded-0"
              {...register("priceNow", { required: "priceNow is required" })}
              placeholder="priceNow"
            />
            {errors.priceNow && <p className="form_hook_error">{`${errors.priceNow.message}`}</p>}
          </div>
        </div>

        <div className="row">
          <div className="col">
            <label
              htmlFor="pricePrevious"
              className="form-label mt-3 p_zero_first_cap h6 ">
              pricePrevious
            </label>
            <input
              className=" input_field_style form-control form-control-lg px-2  border-0  rounded-0"
              {...register("pricePrevious", { required: "pricePrevious is required" })}
              placeholder="pricePrevious"
            />
            {errors.pricePrevious && <p className="form_hook_error">{`${errors.pricePrevious.message}`}</p>}
          </div>

          <div className="col">
            <label
              htmlFor="description"
              className="form-label mt-3 p_zero_first_cap h6 ">
              Description
            </label>
            <input
              className=" input_field_style form-control form-control-lg px-2  border-0  rounded-0"
              {...register("description", { required: "description is required" })}
              placeholder="description"
            />
            {errors.description && <p className="form_hook_error">{`${errors.description.message}`}</p>}
          </div>
        </div>

        <div className="row">
          <div className="col ">
            <label
              htmlFor="isActive"
              className="form-label mt-3 p_zero_first_cap h6 ">
              Active
            </label>

            <select
              {...register("isActive", { required: "isActive is required" })}
              className="form-select input_field_style form-control form-control-lg mb-0  border-0  rounded-0"
              aria-label="Select isActive">
              <option
                selected
                value={"Null"}>
                Select Top Selling Product Or Not
              </option>
              <option value="1">Yes</option>
              <option value="0">No</option>
            </select>
            {errors.isActive && <p className="form_hook_error">{`${errors.isActive.message}`}</p>}
          </div>

          <div className="col ">
            <label
              htmlFor="isBestSeller"
              className="form-label mt-3 p_zero_first_cap h6 ">
              isBestSeller
            </label>

            <select
              {...register("isBestSeller", { required: "isBestSeller is required" })}
              className="form-select input_field_style form-control form-control-lg mb-0  border-0  rounded-0"
              aria-label="Select isBestSeller">
              <option
                selected
                value={"Null"}>
                Select Top Selling Product Or Not
              </option>
              <option value="1">Yes</option>
              <option value="0">No</option>
            </select>
            {errors.isBestSeller && <p className="form_hook_error">{`${errors.isBestSeller.message}`}</p>}
          </div>
        </div>

        <div className="row">
          <div className="col ">
            <label
              htmlFor="isBestSeller"
              className="form-label mt-3 p_zero_first_cap h6 ">
              isBestSeller
            </label>

            <select
              {...register("isBestSeller", { required: "isBestSeller is required" })}
              className="form-select input_field_style form-control form-control-lg mb-0  border-0  rounded-0"
              aria-label="Select isBestSeller">
              <option
                selected
                value={"Null"}>
                Select Top Selling Product Or Not
              </option>
              <option value="1">Yes</option>
              <option value="0">No</option>
            </select>
            {errors.isBestSeller && <p className="form_hook_error">{`${errors.isBestSeller.message}`}</p>}
          </div>

          <div className="col ">
            <label
              htmlFor="isHotSale"
              className="form-label mt-3 p_zero_first_cap h6 ">
              isHotSale
            </label>

            <select
              {...register("isHotSale", { required: "isHotSale is required" })}
              className="form-select input_field_style form-control form-control-lg mb-0  border-0  rounded-0"
              aria-label="Select isHotSale">
              <option
                selected
                value={"Null"}>
                Select Top Selling Product Or Not
              </option>
              <option value="1">Yes</option>
              <option value="0">No</option>
            </select>
            {errors.isHotSale && <p className="form_hook_error">{`${errors.isHotSale.message}`}</p>}
          </div>
        </div>

        <div className="col-6 ">
          <label
            htmlFor="isInStock"
            className="form-label mt-3 p_zero_first_cap h6 ">
            isInStock
          </label>

          <select
            {...register("isInStock", { required: "isInStock is required" })}
            className="form-select input_field_style form-control form-control-lg mb-0  border-0  rounded-0"
            aria-label="Select isInStock">
            <option
              selected
              value={"Null"}>
              Select Top Selling Product Or Not
            </option>
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
          {errors.isInStock && <p className="form_hook_error">{`${errors.isInStock.message}`}</p>}
        </div>

        <div className="mt-3 d-flex justify-content-end  gap-2">
          <Button
            type="submit"
            className="customCard px-4">
            Add
          </Button>
        </div>
      </form>
    </div>
  );
}
