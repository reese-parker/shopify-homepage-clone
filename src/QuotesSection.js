import React from "react";
import styles from "./styles/QuotesSectionStyles.module.css";
import seamstressImage from "./images/seamstressImage.png";
import ceeCeesClosetImage from "./images/ceeCeesClosetImage.png";
import playIcon from "./images/playIcon.svg"

export default function QuotesSection() {
  return (
    <section className={styles.container}>
      <div className={styles.quoteContainer}>
        <div className={styles.seamstressImageContainer}>
          <img className={styles.seamstressImage} alt="" src={seamstressImage} />
        </div>
        <div className={styles.textContainer}>
          <p className={styles.quote}>
            “We’ve been able to build something in 3 years that a lot of brands
            haven’t actually gotten to in 10 years.”
          </p>
          <div className={styles.ceeCeesClosetImageContainer}>
            <img className={styles.ceeCeesClosetImage} alt="" src={ceeCeesClosetImage} />
          </div>
          <p className={styles.quoteName}>Chioma | Cee Cee's Closet NYC</p>
          <div className={styles.buttonContainer}>
              < img className={styles.playButton} alt="" src={playIcon} />
              <p className={styles.buttonText}>Play Chioma and Uchenna's story</p>
          </div>
        </div>
      </div>
    </section>
  );
}
