import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { useRouter } from "next/router.js";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

export default function Register() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  const handleAllField = watch();
  console.log(handleAllField);

  const registerUser = async () => {
    try {
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  const [visible, setVisible] = useState(false);
  const showPassword = () => {
    setVisible(true);
  };

  const hidePassword = () => {
    setVisible(false);
  };

  return (
    <div
      className=" matter d-flex align-items-center justify-content-center "
      style={{ minHeight: "70vh" }}>
      <div className="login_wrapper ">
        <form
          onSubmit={handleSubmit(registerUser)}
          className="d-flex flex-column align-items-center login_form_box">
          <h1 className="h1  mb-1 pb-2 my_black fw-bold">Create an account </h1>
          <p className="my_black">Signup to get the most out of Falcon Traders</p>

          <div className="w-100 my-2">
            <input
              type="text"
              className="form-control register_input rounded-1 py-3 "
              placeholder="Full Name"
              {...register("fullName", { required: true })}
            />
            {errors.fullName && <span className="text-danger fw-semibold">Full Name is required</span>}
          </div>

          <div className="w-100 my-2">
            <input
              type="email"
              className="form-control register_input rounded-1 py-3 "
              placeholder="Email"
              {...register("email", { required: true, minLength: 6 })}
            />
            {errors.email && <span className="text-danger fw-semibold">Email is required of Length 6</span>}
          </div>

          <div className="w-100 d-flex align-items-center justify-content-between my-2 form-control register_input rounded-1 py-3">
            <input
              type={visible ? "text" : "password"}
              className=" w-100 inside_input "
              placeholder="Password"
              {...register("password", { required: true })}
            />
            <div>
              {visible ? (
                <AiOutlineEye
                  onClick={hidePassword}
                  size={24}
                  className="cp"
                />
              ) : (
                <AiOutlineEyeInvisible
                  onClick={showPassword}
                  size={24}
                  className="cp"
                />
              )}
            </div>
            {errors.email && <span className="text-danger fw-semibold">Email is required</span>}
          </div>

          <div className="w-100 my-2">
            <input
              type={visible ? "text" : "password"}
              className="form-control register_input rounded-1 py-3 "
              placeholder="Confirm Password"
              {...register("confirmPassword", { required: true })}
            />
            {errors.confirmPassword && <span className="text-danger fw-semibold">Confirm Password is required</span>}
            {handleAllField.password && handleAllField.confirmPassword && handleAllField.password != handleAllField.confirmPassword && <span className="text-danger fw-semibold">Password does not match !</span>}
          </div>

          <div className="w-100 d-flex my-2 justify-content-between ">
            <div className=" form-check">
              <input
                type="checkbox"
                className="form-check-input check_box shadow-none rounded-0 cp"
                id="exampleCheck1"
              />
              <label
                className="form-check-label cp no_selection  my_black"
                htmlFor="exampleCheck1">
                Accept Terms & Conditions
              </label>
            </div>
            <div className="forgot">
              <p className="my_black forgot">Forgot Password?</p>
            </div>
          </div>

          <button
            type="submit"
            className="btn  w-100 register_button rounded-1">
            Login
          </button>
          <small className="pb-2 pt-3 text-muted">
            Already have an account ?{" "}
            <Link href={"login"}>
              <span className="forgot">Login</span>
            </Link>
          </small>
        </form>
      </div>
    </div>
  );
}
