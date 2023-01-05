import React, { useState } from "react";
import { Grid, Dialog, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { useCreateNewCategoryMutation } from "../../redux/api/globalApi";

export default function AddCategoryDialog() {
  const [createNewCategory] = useCreateNewCategoryMutation();

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
  const handleAllField = watch();

  const createCategory = async () => {
    createNewCategory(handleAllField);
    reset();
    handleClose();
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
          onSubmit={handleSubmit(createCategory)}
          className="customCard p-3 overflow_hidden">
          <h4>Create New Service </h4>
          <p className="customPrimaryTxtColor">To subscribe to this website, please enter your email address here. We will send updates occasionally.</p>

          <div className="row mb-3 ">
            <label
              htmlFor="name"
              className="form-label h6 p_zero_first_cap mt-2 ">
              Category Name
            </label>
            <input
              className=" input_field_style form-control form-control-lg  px-2  border-0  rounded-0"
              {...register("name", { required: "Required field" })}
              placeholder="Category Name"
            />
            {errors.name && <p className="form_hook_error">{`${errors.name.message}`}</p>}
          </div>

          <div className="row mb-3 ">
            <label
              htmlFor="image"
              className="form-label h6 p_zero_first_cap mt-2 ">
              Image
            </label>
            <input
              className=" input_field_style form-control form-control-lg  px-2  border-0  rounded-0"
              {...register("image", { required: "Required field" })}
              placeholder="Image"
            />
            {errors.image && <p className="form_hook_error">{`${errors.image.message}`}</p>}
          </div>

          <div className="row mb-3 ">
            <label
              htmlFor="description"
              className="form-label h6 p_zero_first_cap mt-2 ">
              Description
            </label>
            <input
              className=" input_field_style form-control form-control-lg  px-2  border-0  rounded-0"
              {...register("description", { required: "Required field" })}
              placeholder="Description"
            />
            {errors.description && <p className="form_hook_error">{`${errors.description.message}`}</p>}
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
