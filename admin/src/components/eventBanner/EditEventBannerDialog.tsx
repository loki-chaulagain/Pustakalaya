import React, { useState } from "react";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";

export default function EditEventBannerDialog() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  const handleAllField = watch();

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const updateEventBanner = async () => {
    try {
    } catch (error) {}
  };

  return (
    <>
      <div>
        <form
          className="customCard p-3 overflow_hidden"
          onSubmit={handleSubmit(updateEventBanner)}>
          <h4>Create New Event Banner </h4>
          <p className="customPrimaryTxtColor">To subscribe to this website, please enter your email address here. We will send updates occasionally.</p>

          <div className="row ">
            <label
              htmlFor="image"
              className="form-label p_zero_first_cap mt-3 h6 ">
              Banner Image
            </label>

            <input
              type="text"
              className=" input_field_style form-control form-control-lg   border-0  rounded-0"
              {...register("image", { required: "Image is required" })}
              placeholder="Banner Image"
            />
            {errors.image && <p className="form_hook_error">{`${errors.image.message}`}</p>}
          </div>

          <div className="row">
            <label
              htmlFor="description"
              className="form-label p_zero_first_cap mt-3 h6 ">
              Active Status
            </label>

            <select
              {...register("status", { required: "status is required" })}
              className="form-select input_field_style form-control form-control-lg  border-0  rounded-0"
              aria-label="Banner hide show status ">
              <option value="0">Inactive</option>
              <option value="1">Active</option>
            </select>
            {errors.status && <p className="form_hook_error">{`${errors.status.message}`}</p>}
          </div>

          <div className="mt-3 d-flex justify-content-end  gap-2">
            <Button
              className="customCard px-3"
              onClick={handleClose}>
              Cancel
            </Button>
            <Button
              type="submit"
              className="customCard px-4">
              Add
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
