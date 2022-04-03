import React from "react";
import globeImage from "./images/globe.png";
import styles from "./styles/EmpoweringSectionStyles.module.css";

export default function EmpoweringSection() {
  return (
    <section className={styles.container}>
      <p className={styles.title}>
        Empowering independent business owners everywhere
      </p>
      <p className={styles.description}>
        Millions of businesses in <b>175 countries</b> around the world have
        made over <b>$200 billion USD</b> in sales using Shopify.
      </p>
      <p className={styles.learnMore}>Learn more about Shopify</p>
      <div className={styles.globeImageContainer}>
        <img className={styles.globeImage} alt="" src={globeImage} />
      </div>
    </section>
  );
}
