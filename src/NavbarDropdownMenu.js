import React, { forwardRef } from "react";
import styles from "./styles/NavbarDropdownMenuStyles.module.css";
import navbarLinkRightArrow from "./images/navbarLinkRightArrow.svg";

const startDropdownList = [
  "Start your business",
  "Branding",
  "Online presence",
  "Store set up",
];
const sellDropdownList = [
  "Sell everywhere",
  "Online store",
  "Point of Sale",
  "Buy Button",
  "Checkout",
  "Sales channels",
  "Custom storefront tools",
  "International commerce",
];
const marketDropdownList = [
  "Market your business",
  "Email marketing",
  "Marking automation",
  "Customer groups",
  "Business chat",
  "Facebook Ads",
];
const manageDropdownList = [
  "Manage everything",
  "Payments",
  "Ecommerce automation",
  "Capital",
  "Shipping",
];
const learnDropdownList = [
  "Help Center",
  "Blog",
  "Business Courses",
  "Guides",
  "Shopify Community",
  "Free tools",
  "Podcasts",
  "Business encyclopedia",
  "Community Events",
  "Research",
];

const NavbarDropdownMenu = forwardRef((props, ref) => {
  const { menu } = props;

  let dropdownList;
  switch (menu) {
    case "Start":
      dropdownList = startDropdownList;
      break;
    case "Sell":
      dropdownList = sellDropdownList;
      break;
    case "Market":
      dropdownList = marketDropdownList;
      break;
    case "Manage":
      dropdownList = manageDropdownList;
      break;
    case "Learn":
      dropdownList = learnDropdownList;
      break;
    default:
      break;
  }

  return (
    
    <div ref={ref} className={styles.dropdownMenu}>
      <ul className={styles.dropdownList}>
        {dropdownList.map((listItem) => (
          <li key={listItem}>
            <span>{listItem}</span>
            <img alt="" src={navbarLinkRightArrow} />
          </li>
        ))}
      </ul>
    </div>
  );
});

export default NavbarDropdownMenu;
