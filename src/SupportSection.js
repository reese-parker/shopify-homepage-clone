import React from "react";
import styles from "./styles/SupportSectionStyles.module.css";
import manTyping from "./images/manTyping.png"

export default function SupportSection() {
  return (
    <section className={styles.container}>
      <div className={styles.textContainer}>
        <p className={styles.title}>
          Get the help you need, every step of the way
        </p>
        <div className={styles.supportOptionContainer}>
          <p className={styles.subtitle}>Shopify support</p>
          <p className={styles.description}>Contact support 24/7, whether you're troubleshooting issues or looking for business advice.</p>
          <p className={styles.exploreLink}>Contact support</p>
        </div>
        <div className={styles.supportOptionContainer}>
          <p className={styles.subtitle}>Shopify App Store</p>
          <p className={styles.description}>Add features and functionality to your business with 6,000+ apps that integrate directly with Shopify.</p>
          <p className={styles.exploreLink}>Visit the Shopify App Store</p>
        </div>
        <div className={styles.supportOptionContainer}>
          <p className={styles.subtitle}>Shopify Experts Marketplace</p>
          <p className={styles.description}>Hire a Shopify expert to help you with everything from store setup to SEO.</p>
          <p className={styles.exploreLink}>Explore the Shopify Experts Marketplace</p>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img className={styles.image} alt="" src={manTyping} />
      </div>
    </section>
  );
}
