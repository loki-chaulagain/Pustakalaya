import React from "react";
import styles from "../styles/modules/LatestProduct.module.css";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useCreateSubscriberMutation } from "../redux/api/globalApi";

const Newsletter = () => {
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
  console.log(handleAllField)

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
    <div className={`${styles.newsletter_section} px-2 `}>
      <div className="container news_letter_padding">
        <div className={`${styles.news_letter_header} text_muted_heading d-flex flex-column  text_color_white align-items-center text-center`}>
          <h1 >Join to our Newsletter</h1>
          <p className="text-muted">If you never miss our interesting news by joining our newsletter.</p>
        </div>
        <form
          onSubmit={handleSubmit(handleCreateSubscriber)}
          className="d-flex flex-column flex-sm-row pt-5 mb-1">
          <input
            type="email"
            className={`${styles.form_control} form-control form-control-lg rounded-0 `}
            {...register("email", { required: "Email is required" })}
            placeholder="name@example.com"
          />
          <button
            type="submit"
            className={`${styles.subscribe_button} px-5 py-3 py-sm-0 mt-3 mt-sm-0`}>
            Subscribe
          </button>
        </form>
        {errors.email && <p className="form_hook_error fw-semibold ">{`${errors.email.message}`}</p>}
      </div>
    </div>
  );
};

export default Newsletter;
