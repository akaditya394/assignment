import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import 'animate.css';

function Header() {
  return (
    <header className={styles.header}>
      <h1 >invoice generator</h1>
      <Link to="/" className={styles.textLink}>
        <p>Home</p>
      </Link>
      <Link to="/about" className={styles.textLink}>
        <p>About</p>
      </Link>
      <Link to="/contactus" className={styles.textLink}>
        <p>Contact Us</p>
      </Link>
    </header>
  );
}

export default Header;
