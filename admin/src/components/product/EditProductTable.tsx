import React, { useContext, useState } from "react";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { useCreateProductMutation, useGetCategoriesQuery } from "../../redux/api/globalApi";
import { GlobalContext } from "../../context/GlobalContext";
import { useRouter } from "next/router";

export default function EditProductTable() {
  const router = useRouter();
  const { data: categories } = useGetCategoriesQuery();
  const [createProduct] = useCreateProductMutation();
  const { createSuccessToast } = useContext(GlobalContext);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  const handleAllField: any = watch();
  console.log(handleAllField);

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const createProductHandler = () => {
    try {
      createProduct(handleAllField);
      createSuccessToast();
      reset();
      handleClose();
      router.push("/product");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(createProductHandler)}
        className="customCard p-3 overflow_hidden">
        <h4>Create New Service </h4>
        <p className="customPrimaryTxtColor">To subscribe to this website, please enter your email address here. We will send updates occasionally.</p>

        <div className="row">
          <div className="col-6 ">
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

          <div className="col-6 ">
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

          <div className="col-6">
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

          <div className="col-6">
            <label
              htmlFor="author"
              className="form-label mt-3 p_zero_first_cap h6 ">
              author
            </label>
            <input
              className=" input_field_style form-control form-control-lg px-2  border-0  rounded-0"
              {...register("author", { required: "author is required" })}
              placeholder="author"
            />
            {errors.author && <p className="form_hook_error">{`${errors.author.message}`}</p>}
          </div>

          <div className="col-6">
            <label
              htmlFor="publishedYear"
              className="form-label mt-3 p_zero_first_cap h6 ">
              publishedYear
            </label>
            <input
              className=" input_field_style form-control form-control-lg px-2  border-0  rounded-0"
              {...register("publishedYear", { required: "publishedYear is required" })}
              placeholder="publishedYear"
            />
            {errors.publishedYear && <p className="form_hook_error">{`${errors.publishedYear.message}`}</p>}
          </div>

          <div className="col-6">
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

          <div className="col-6">
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

          <div className="col-6 ">
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

          <div className="col-6 ">
            <label
              htmlFor="isMostSelling"
              className="form-label mt-3 p_zero_first_cap h6 ">
              isMostSelling
            </label>

            <select
              {...register("isMostSelling", { required: "isMostSelling is required" })}
              className="form-select input_field_style form-control form-control-lg mb-0  border-0  rounded-0"
              aria-label="Select isMostSelling">
              <option
                selected
                value={"Null"}>
                Select Top Selling Product Or Not
              </option>
              <option value="1">Yes</option>
              <option value="0">No</option>
            </select>
            {errors.isMostSelling && <p className="form_hook_error">{`${errors.isMostSelling.message}`}</p>}
          </div>

          <div className="col-6 ">
            <label
              htmlFor="isFeatured"
              className="form-label mt-3 p_zero_first_cap h6 ">
              isFeatured
            </label>

            <select
              {...register("isFeatured", { required: "isFeatured is required" })}
              className="form-select input_field_style form-control form-control-lg mb-0  border-0  rounded-0"
              aria-label="Select isFeatured">
              <option
                selected
                value={"Null"}>
                Select Top Selling Product Or Not
              </option>
              <option value="1">Yes</option>
              <option value="0">No</option>
            </select>
            {errors.isFeatured && <p className="form_hook_error">{`${errors.isFeatured.message}`}</p>}
          </div>

          <div className="col-6 ">
            <label
              htmlFor="isLatestProduct"
              className="form-label mt-3 p_zero_first_cap h6 ">
              isLatestProduct
            </label>

            <select
              {...register("isLatestProduct", { required: "isLatestProduct is required" })}
              className="form-select input_field_style form-control form-control-lg mb-0  border-0  rounded-0"
              aria-label="Select isLatestProduct">
              <option
                selected
                value={"Null"}>
                Select Top Selling Product Or Not
              </option>
              <option value="1">Yes</option>
              <option value="0">No</option>
            </select>
            {errors.isLatestProduct && <p className="form_hook_error">{`${errors.isLatestProduct.message}`}</p>}
          </div>

          <div className="col-6 ">
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
