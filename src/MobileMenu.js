import React from "react";

import shopifyLogo from "./images/shopify_logo_whitebg.svg";
import closeMobileMenuIcon from "./images/closeMobileMenuIcon.svg";

import styles from "./styles/MobileMenuStyles.module.css";
import MobileMenuLink from "./MobileMenuLink";

export default function MobileMenu(props) {
  const { toggleMobileMenu } = props;


  return (
  
      <div className={styles.mobileMenuContainer}>
        <div className={styles.mobileMenuHeader}>
          <img className={styles.logo} src={shopifyLogo} alt="" />
          <img
            onClick={toggleMobileMenu}
            className={styles.closeMobileMenuIcon}
            src={closeMobileMenuIcon}
            alt=""
          />
        </div>
        <ul className={styles.mobileMenuList}>
          <MobileMenuLink text="Start" dropdown />
          <MobileMenuLink text="Sell" dropdown />
          <MobileMenuLink text="Market" dropdown />
          <MobileMenuLink text="Manage" dropdown />
          <MobileMenuLink text="Pricing" />
          <MobileMenuLink text="Learn" dropdown />
          <MobileMenuLink text="Login" />
          <li className={styles.freeTrialLinkWrapper}>
            <span className={styles.freeTrialLink}>Start free trial</span>
          </li>
          <MobileMenuLink text="About" />
          <MobileMenuLink text="Careers" />
          <MobileMenuLink text="Press and Media" />
          <MobileMenuLink text="Shopify Plus" />
          <MobileMenuLink text="Sitemap" />
        </ul>
      </div>
  );
}
