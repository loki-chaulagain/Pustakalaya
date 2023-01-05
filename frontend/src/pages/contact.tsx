import React from "react";
import ContactForm from "../components/ContactForm";
import styles from "../styles/modules/Contact.module.css";

export default function contact() {
  return (
    <>
      <div className={`${styles.contact_page_wrapper} container`}>
        <ContactForm />
      </div>
    </>
  );
}
