import React from "react";
import Header from "../../components/Header/Header";
import styles from "./ContactUs.module.css";

function ContactUs() {
  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.about}>
        Contact us on info@invoicegenerator.com
      </div>
    </div>
  );
}

export default ContactUs;
