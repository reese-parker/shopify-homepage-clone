import React from "react";
import styles from "./styles/WhereverSectionStyles.module.css";
import sellEverywhere from "./images/sellEverywhere.png"
import marketYourBusiness from "./images/marketYourBusiness.png"
import manageEverything from "./images/manageEverything.png"

export default function WhereverSection() {
  return (
    <section className={styles.container}>
      <div className={styles.titleContainer}>
        <p className={styles.title}>With you wherever you're going</p>
        <p className={styles.description}>
          One platform with all the ecommerce and point of sale features you
          need to start, run, and grow your business.
        </p>
      </div>

      <div className={styles.exampleContainer}>
        <div className={styles.exampleText}>
          <p className={styles.exampleTitle}>Sell everywhere</p>
          <p className={styles.exampleDescription}>
            Use one platform to sell products to anyone, anywhere—in person with
            Point of Sale and online through your website, social media, and
            online marketplaces.
          </p>
          <span className={styles.exploreText}>Explore ways to sell</span>
        </div>
        <div className={styles.exampleImageContainer}>
            <img className={styles.exampleImage} alt="" src={sellEverywhere} />
        </div>
      </div>
      

      <div className={styles.exampleContainer}>
          
        <div className={styles.exampleText}>
          <p className={styles.exampleTitle}>Market your business</p>
          <p className={styles.exampleDescription}>
          Take the guesswork out of marketing with built-in tools that help you create, execute, and analyze digital marketing campaigns.
          </p>
          <span className={styles.exploreText}>Explore how to market your business</span>
        </div>
        <div className={styles.exampleImageContainer}>
            <img className={styles.exampleImage} alt="" src={marketYourBusiness} />
        </div>
      </div>

      <div className={styles.exampleContainer}>
        <div className={styles.exampleText}>
          <p className={styles.exampleTitle}>Manage everything</p>
          <p className={styles.exampleDescription}>
          Gain the insights you need to grow—use a single dashboard to manage orders, shipping, and payments anywhere you go.
          </p>
          <span className={styles.exploreText}>Explore how to manage your business</span>
        </div>
        <div className={styles.exampleImageContainer}>
            <img className={styles.exampleImage} alt="" src={manageEverything} />
        </div>
      </div>

  

    </section>
  );
}
