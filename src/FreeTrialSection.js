import React from "react";
import { Link } from "react-scroll/modules";
import styles from "./styles/FreeTrialSectionStyles.module.css";
import navigateUpArrow from "./images/navigateUpArrow.svg";

export default function FreeTrialSection() {
  return (
    <section className={styles.container}>
      <p className={styles.title}>Start your business journey with Shopify</p>
      <p className={styles.description}>
        Try Shopify for free, and explore all the tools and services you need to
        start, run, and grow your business.
      </p>
      <div className={styles.button}>
        <p className={styles.buttonText}>Start free trial</p>
      </div>
      <Link to="App" smooth>
        <div className={styles.navigateWrapper}>
          <span className={styles.navigateText}>Back to top</span>
          <img
            className={styles.navigateUpArrow}
            alt=""
            src={navigateUpArrow}
          />
        </div>
      </Link>
    </section>
  );
}
