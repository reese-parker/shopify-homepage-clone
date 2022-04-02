import React from "react";
import heroProduct from "./images/heroProduct.png";

import styles from "./styles/IntroSectionStyles.module.css";

export default function IntroSection() {
  return (
    <section className={styles.container}>
      <div className={styles.signUpContainer}>
          <p className={styles.title}>The platform commerce is built on</p>
          <p className={styles.description}>Millions of the world's most successful brands trust Shopify to sell, ship and process payments anywhere.</p>
          <form className={styles.emailForm}>
          <input className={styles.emailInput} placeholder="Enter your email address"></input>
          <div className={styles.freeTrialButtonContainer}><span className={styles.freeTrialButton}>Start your free trial</span></div>
          </form>
          
          <p className={styles.disclaimer}>Try Shopify free for 14 days, no credit card required. By entering your email, you agree to receive marketing emails from Shopify.</p>
      </div>

      <div className={styles.heroProductImageContainer}>
        <img alt="" src={heroProduct} className={styles.heroProductImage} />
      </div>
    </section>
  );
}
