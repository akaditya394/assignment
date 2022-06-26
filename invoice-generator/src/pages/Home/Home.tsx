import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Section from "../../components/Section/Section";
import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.home}>
      <Header />
      <div className={styles.main}>
        <Link to="/generateinvoice" className={styles.linkItem}>
          <Section title="generate invoice" />
        </Link>
        <Link to="invoices" className={styles.linkItem}>
          <Section title="view invoice" />
        </Link>
      </div>
    </div>
  );
}

export default Home;
