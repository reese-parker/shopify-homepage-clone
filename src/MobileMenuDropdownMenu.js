import React from "react";
import styles from "./styles/MobileMenuDropdownMenuStyles.module.css"

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

const MobileDropdownMenu = (props) => {
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

    <div  className={styles.dropdownMenu}>
      <ul >
        {dropdownList.map((listItem) => (
          <li className={styles.dropdownListItem} key={listItem}>
            <span>{listItem}</span>
          </li>
        ))}
      </ul>
    </div>
  );

};

export default MobileDropdownMenu;
