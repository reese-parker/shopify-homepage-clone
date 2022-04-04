import React from "react";
import styles from "./styles/FooterStyles.module.css";

export default function Footer() {
  return (
    <footer className={styles.container}>
      <ul className={styles.topLinks}>
        <li className={styles.topLink}>About</li>
        <li className={styles.topLink}>Career</li>
        <li className={styles.topLink}>Press and Media</li>
        <li className={styles.topLink}>Shopify Plus</li>
        <li className={styles.topLink}>Sitemap</li>
      </ul>
      <div className={styles.bottomLinks}>
        <div className={styles.leftLinks}>
          <ul className={styles.onlineStoreLinks}>
            <li className={styles.onlineStoreHeader}>ONLINE STORE</li>
            <li className={styles.onlineStoreLink}>Sell online</li>
            <li className={styles.onlineStoreLink}>Features</li>
            <li className={styles.onlineStoreLink}>Examples</li>
            <li className={styles.onlineStoreLink}>Website builder</li>
            <li className={styles.onlineStoreLink}>Online retail</li>
            <li className={styles.onlineStoreLink}>Ecommerce website</li>
            <li className={styles.onlineStoreLink}>Domain names</li>
            <li className={styles.onlineStoreLink}>Themes</li>
            <li className={styles.onlineStoreLink}>Shopping cart</li>
            <li className={styles.onlineStoreLink}>Ecommerce hosting</li>
            <li className={styles.onlineStoreLink}>Mobile commerce</li>
            <li className={styles.onlineStoreLink}>Ecommerce software</li>
            <li className={styles.onlineStoreLink}>Online store builder</li>
            <li className={styles.onlineStoreLink}>Dropshipping business</li>
            <li className={styles.onlineStoreLink}>Store themes</li>
          </ul>
        </div>

        <div className={styles.rightLinks}>
          <ul className={styles.pointOfSaleLinks}>
            <li className={styles.pointOfSaleHeader}>POINT OF SALE</li>
            <li className={styles.pointOfSaleLink}>Point of sale</li>
            <li className={styles.pointOfSaleLink}>Features</li>
            <li className={styles.pointOfSaleLink}>Hardware</li>
          </ul>

          <ul className={styles.supportLinks}>
            <li className={styles.supportHeader}>SUPPORT</li>
            <li className={styles.supportLink}>24/7 support</li>
            <li className={styles.supportLink}>Shopify Help Center</li>
            <li className={styles.supportLink}>Shopify Community</li>
            <li className={styles.supportLink}>API documentation</li>
            <li className={styles.supportLink}>Free tools</li>
            <li className={styles.supportLink}>Free stock photos</li>
            <li className={styles.supportLink}>Websites for sale</li>
            <li className={styles.supportLink}>Logo Maker</li>
            <li className={styles.supportLink}>Business name generator</li>
            <li className={styles.supportLink}>Research</li>
          </ul>

          <ul className={styles.shopifyLinks}>
            <li className={styles.shopifyHeader}>SHOPIFY</li>
            <li className={styles.shopifyLink}>Contact</li>
            <li className={styles.shopifyLink}>Partner program</li>
            <li className={styles.shopifyLink}>Affiliate program</li>
            <li className={styles.shopifyLink}>App developers</li>
            <li className={styles.shopifyLink}>Investors</li>
            <li className={styles.shopifyLink}>Blog topics</li>
            <li className={styles.shopifyLink}>Accessibility</li>
            <li className={styles.shopifyLink}>Community Events</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
