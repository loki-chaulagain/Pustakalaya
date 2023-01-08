import Link from "next/link";
import React from "react";
import styles from "../styles/modules/Footer.module.css";
import { useForm } from "react-hook-form";
import { useCreateSubscriberMutation } from "../redux/api/globalApi";
import { toast } from "react-hot-toast";

const Footer = () => {
  const [createSubscriber] = useCreateSubscriberMutation();
  const subscribedSuccess = () => toast(" ✅ Subscribed Success");
  const subscribedUnSuccess = () => toast(" ❌ Something Went Wrong");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  const handleAllField: any = watch();

  const handleCreateSubscriber = async () => {
    try {
      createSubscriber(handleAllField);
      subscribedSuccess();
      reset();
    } catch (error) {
      console.log(error);
      subscribedUnSuccess();
      reset();
    }
  };

  return (
    <div>
      <footer className={`${styles.footer}`}>
        <div className="footer-content container">
          <div className="row px-0 mx-0">
            <div className="col-12 d-flex flex-column  mb-5 col-lg-4">
              <h1 className="color_white">पुस्तकालय</h1>
              <p className="mt-3">Kathmandu, NewBaneshwor Area, Nepal</p>
              <p className="mt-1">lokendra@gmail.com</p>
              <p className=" mt-1">9864755749</p>
            </div>

            <div className="col-12 col-md-6 col-lg-4 mb-5 pb-3 d-flex flex-column">
              <h4 className={`${styles.footer_column_heading}`}>Useful Links</h4>
              <div className="row pt-1">
                <div className="col d-flex flex-column gap-1">
                  <Link href={"/"}>
                    <a
                      className="nav_link"
                      href="">
                      Home
                    </a>
                  </Link>

                  <Link href={"/cart"}>
                    <a
                      className="nav_link"
                      href="">
                      My Cart
                    </a>
                  </Link>

                  <Link href={"/favourite"}>
                    <a
                      className="nav_link"
                      href="">
                      Favourite
                    </a>
                  </Link>

                  <Link href={"/about"}>
                    <a
                      className="nav_link"
                      href="">
                      About
                    </a>
                  </Link>
                </div>

                <div className="col d-flex flex-column gap-1">
                  <Link href={"/terms-and-conditions"}>
                    <a
                      className="nav_link"
                      href="">
                      Terms and Conditions
                    </a>
                  </Link>

                  <Link href={"/privacy-policy"}>
                    <a
                      className="nav_link"
                      href="">
                      privacy Policy
                    </a>
                  </Link>

                  <Link href={"/login"}>
                    <a
                      className="nav_link"
                      href="">
                      Login
                    </a>
                  </Link>

                  <Link href={"/contact"}>
                    <a
                      className="nav_link"
                      href="">
                      Contact
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <form
              onSubmit={handleSubmit(handleCreateSubscriber)}
              className="col-12 col-md-6 col-lg-4">
              <h4 className={`${styles.footer_column_heading}`}>Subscribe Us</h4>
              <p className="pt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa cupiditate labore fugit voluptate officiis accusantium?</p>
              <div className="d-flex flex-column  flex-md-row pt-3 ">
                <div>
                  <input
                    type="email"
                    className={`${styles.form_control}   form-control form-control-lg rounded-0  `}
                    {...register("email", { required: "Email is required" })}
                    placeholder="Email Address"
                  />
                  {errors.email && <p className="form_hook_error fw-semibold d-block d-sm-none">{`${errors.email.message}`}</p>}
                </div>
                <button
                  type="submit"
                  className={`${styles.subscribe_button} px-3 py-3  py-md-0 mt-3 mt-md-0`}>
                  Subscribe
                </button>
              </div>
              {errors.email && <p className="form_hook_error fw-semibold d-none d-sm-block">{`${errors.email.message}`}</p>}
            </form>
          </div>
        </div>

        <div className="footer-copyright z999">
          <div className="footer-copyright-wrapper">
            <p className="footer_copyright_text">
              ©2022. | Designed And Developed By : <span className={styles.falcon_link}> Lokendra Chaulagain </span> | All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
