import React from "react";
import styles from "./styles/BusinessOnlineSectionStyles.module.css";
import exploreMoreArrow from "./images/exploreMoreArrow.svg"
import BusinessExample from "./BusinessExample";
import BusinessPath from "./BusinessPath";
import foodAndDrink from "./images/foodAndDrink.png";
import jewelry from "./images/jewelry.png";
import beautyAndCosmetics from "./images/beautyAndCosmetics.png";
import homeAndGarden from "./images/homeAndGarden.png";
import startPath from "./images/startPath.svg"
import movePath from "./images/movePath.svg"
import switchPath from "./images/switchPath.svg"
import hirePath from "./images/hirePath.svg"


const paths = [
  {
    svg: startPath,
    title: "Start an online business",
    description: "Create a business, whether you've got a fresh idea or are looking for a new way to make money."
  },
  {

    
    svg: movePath,
    title: "Move your business online",
    description: "Turn your retail store into an online store and keep serving customers without missing a beat."
  },
  {
    svg: switchPath,
    title: "Switch to Shopify",
    description: "Bring your business to Shopify, no matter which ecommerce platform you’re currently using."
  },
  {
    svg: hirePath,
    title: "Hire a Shopify expert",
    description: "Get set up with the help of a trusted freelancer or agency from the Shopify Experts Marketplace."
  }
]


export default function BusinessOnlineSection() {
  return (
    <section className={styles.container}>
      <p className={styles.title}>Bring your business online</p>
      <p className={styles.description}>Create an ecommerce website backed by powerful tools that help you find customers, drive sales, and manage your day-to-day.</p>
      <div className={styles.exploreContainer}>
        <span className={styles.exploreText}>Explore more examples</span>
        <img className={styles.exploreMoreArrow} alt="" src={exploreMoreArrow} />
      </div>
      <div className={styles.examplesContainer}>
        <BusinessExample image={foodAndDrink} business="FOOD & DRINK" name="Alfred" />
        <BusinessExample image={jewelry} business="JEWELRY" name="Corey Moranis" />
        <BusinessExample image={beautyAndCosmetics} business="BEAUTY & COSMETICS" name="Then I Met You" />
        <BusinessExample image={homeAndGarden} business="HOME & GARDEN" name="Miss Boon" />
      </div>
      <p className={styles.subtitle}>Take the best path forward</p>
      <div className={styles.businessPathsContainer}>
        <BusinessPath svg={paths[0].svg} title={paths[0].title} description={paths[0].description}/>
        <BusinessPath svg={paths[1].svg} title={paths[1].title} description={paths[1].description}/>
        <BusinessPath svg={paths[2].svg} title={paths[2].title} description={paths[2].description}/>
        <BusinessPath svg={paths[3].svg} title={paths[3].title} description={paths[3].description}/>
      </div>
    </section>
  );
}
