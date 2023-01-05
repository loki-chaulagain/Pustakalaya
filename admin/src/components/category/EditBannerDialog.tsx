import React, { useEffect } from "react";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useGetBannerQuery, useUpdateBannerMutation } from "../../redux/api/globalApi";

export default function EditBannerDialog() {
  const router = useRouter();
  const id: any = router.query.id;
  const { data: singleBanner } = useGetBannerQuery(id);
  const [updateBanner] = useUpdateBannerMutation();
  console.log(singleBanner);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  const handleAllField: any = watch();

  useEffect(() => {
    reset(singleBanner);
  }, [singleBanner, id]);

  const updateBannerHandler = async () => {
    updateBanner(handleAllField);
  };

  return (
    <>
      {singleBanner && (
        <div>
          <form
            className="customCard p-3 overflow_hidden"
            onSubmit={handleSubmit(updateBannerHandler)}>
            <h4>Create New Banner </h4>
            <p className="customPrimaryTxtColor">To subscribe to this website, please enter your email address here. We will send updates occasionally.</p>

            <div className="row">
              <label
                htmlFor="name"
                className="form-label px-0 mt-2 h6 ">
                Banner Title
              </label>
              <input
                className=" input_field_style form-control form-control-lg mb-0  border-0  rounded-0"
                {...register("name", { required: "Name is required" })}
                placeholder="Banner Name"
              />
              {errors.name && <p className="form_hook_error">{`${errors.name.message}`}</p>}
            </div>

            <div className="row ">
              <label
                htmlFor="description"
                className="form-label px-0 mt-2 h6   ">
                Description
              </label>
              <input
                className=" input_field_style form-control form-control-lg mb-0  border-0  rounded-0"
                {...register("description", { required: "description is required" })}
                placeholder="Description"
              />
              {errors.description && <p className="form_hook_error">{`${errors.description.message}`}</p>}
            </div>

            <div className="row ">
              <label
                htmlFor="categoryId"
                className="form-label px-0 mt-2 h6   ">
                categoryId
              </label>
              <input
                type="number"
                className=" input_field_style form-control form-control-lg mb-0  border-0  rounded-0"
                {...register("categoryId", { required: "categoryId is required" })}
                placeholder="categoryId"
              />
              {errors.categoryId && <p className="form_hook_error">{`${errors.categoryId.message}`}</p>}
            </div>

            <div className="row ">
              <label
                htmlFor="image"
                className="form-label px-0 mt-2 h6   ">
                image
              </label>
              <input
                className=" input_field_style form-control form-control-lg mb-0  border-0  rounded-0"
                {...register("image", { required: "image is required" })}
                placeholder="image"
              />
              {errors.image && <p className="form_hook_error">{`${errors.image.message}`}</p>}
            </div>

            <div className="row">
              <label
                htmlFor="status"
                className="form-label px-0 mt-2 h6 ">
                Active Status
              </label>

              <select
                {...register("status", { required: "status is required" })}
                className="form-select input_field_style form-control form-control-lg mb-0 border-0  rounded-0"
                aria-label="Banner hide show status ">
                <option value="0">Inactive</option>
                <option value="1">Active</option>
              </select>
              {errors.status && <p className="form_hook_error">{`${errors.status.message}`}</p>}
            </div>

            <div className="mt-3 d-flex justify-content-end  gap-2">
              <Button className="customCard px-3">Cancel</Button>
              <Button
                type="submit"
                className="customCard px-4">
                Add
              </Button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
