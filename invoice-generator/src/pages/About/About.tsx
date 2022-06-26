import React from "react";
import Header from "../../components/Header/Header";
import styles from "./About.module.css";

function About() {
  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.about}>Your go-to tool for invoice generaton!</div>
    </div>
  );
}

export default About;
