import React, { useState, useContext } from "react";
import { Grid, Dialog, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { useCreateSmallBannerMutation } from "../../redux/api/globalApi";
import { GlobalContext } from "../../context/GlobalContext";

export default function AddEventBannerDialog() {
  const [createSmallBanner] = useCreateSmallBannerMutation();
  const { createSuccessToast } = useContext(GlobalContext);

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  const handleAllField: any = watch();

  const createSmallBannerHandler = async () => {
    try {
      createSmallBanner(handleAllField);
      createSuccessToast();
      reset();
      handleClose()
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Grid
        container
        justifyContent="end">
        <Button
          size="large"
          onClick={handleClickOpen}
          className="customCard px-4">
          Add New
        </Button>
      </Grid>

      <Dialog
        open={open}
        onClose={handleClose}>
        <form
          className="customCard p-3 overflow_hidden"
          onSubmit={handleSubmit(createSmallBannerHandler)}>
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
      </Dialog>
    </>
  );
}
