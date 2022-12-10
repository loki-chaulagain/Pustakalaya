import Link from "next/link";
import React from "react";
import styles from "../styles/modules/Footer.module.css";
import Image from "next/image";
import logo from "../assets/gem_logo.png";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import axios from "axios";

const Footer = () => {
  const mailSendSuccess = () => toast.success("We will notify our updates");
  const sendMailError = () => toast.error("Something Went Wrong");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  const handleAllField = watch();

  const createSubscriber = async () => {
    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/subscriber`, handleAllField);
      console.log("Form has been submitted");
      mailSendSuccess();
      reset();
    } catch (error) {
      console.log(error);
      sendMailError();
    }
  };

  return (
    <div>
      <footer className={`${styles.footer}`}>
        <div className="footer-content container">
          <div className="row px-0 mx-0">
            <div className="col-12 d-flex align-items-center justify-content-center mb-5 col-lg-4">
              <Image
                src={logo}
                width={300}
                height={120}
                alt=" "
                className=""
              />
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

                  <Link href={"/about"}>
                    <a
                      className="nav_link"
                      href="">
                      About
                    </a>
                  </Link>

                  <Link href={"/blog"}>
                    <a
                      className="nav_link"
                      href="">
                      Blogs
                    </a>
                  </Link>
                  <Link href={"/career"}>
                    <a
                      className="nav_link"
                      href="">
                      Careers
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
            <div className="col-12 col-md-6 col-lg-4">
              <h4 className={`${styles.footer_column_heading}`}>Subscribe Us</h4>
              <p className="pt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa cupiditate labore fugit voluptate officiis accusantium?</p>
              <form
                onSubmit={handleSubmit(createSubscriber)}
                className="d-flex flex-column  flex-md-row pt-3 ">
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
              </form>
              {errors.email && <p className="form_hook_error fw-semibold d-none d-sm-block">{`${errors.email.message}`}</p>}
            </div>
          </div>
        </div>

        <div className="footer-copyright z999">
          <div className="footer-copyright-wrapper">
            <p className="footer_copyright_text">
              ©2022. | Designed And Developed By : <span className={styles.falcon_link}> Falcon Tech Nepal </span> | All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
