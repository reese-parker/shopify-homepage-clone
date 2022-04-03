import React from "react";
import { CSSTransition } from "react-transition-group";

import shopifyLogo from "./images/shopify_logo_whitebg.svg";
import menuIcon from "./images/menuIcon.svg";
import NavbarLink from "./NavbarLink";
import MobileMenu from "./MobileMenu";
import useToggleState from "./hooks/useToggleState";

import styles from "./styles/NavbarStyles.module.css";

export default function Navbar() {
  const [isMobileMenuOpen, toggleMobileMenu] = useToggleState(false);

  return (
    <nav id="Navbar" className={styles.navbarContainer}>
      <img className={styles.logo} src={shopifyLogo} alt="" />
      <div className={styles.desktopLinksContainer}>
        <ul className={styles.desktopLeftLinks}>
          <NavbarLink text="Start" />
          <NavbarLink text="Sell" />
          <NavbarLink text="Market" />
          <NavbarLink text="Manage" />
        </ul>

        <ul className={styles.desktopRightLinks}>
          <li>
            <span
              style={{ marginRight: "1rem", fontWeight: 700, color: "#42474c" }}
              className={styles.navbarDesktopLink}
            >
              Pricing
            </span>
          </li>
          <NavbarLink text="Learn" />
        </ul>
      </div>
      <div className={styles.actionsContainer}>
        <span className={styles.logInLink}>Log in</span>
        <div onClick={toggleMobileMenu} className={styles.menuButtonContainer}>
          <img className={styles.menuButton} src={menuIcon} alt="" />
        </div>
        <div className={styles.freeTrialLinkWrapper}>
          <span className={styles.freeTrialLink}>Start free trial</span>
        </div>
      </div>

      <CSSTransition
        in={isMobileMenuOpen}
        mountOnEnter
        timeout={0}
        unmountOnExit
        classNames={{
          enterActive: styles.mobileMenuEnter,
          enterDone: styles.mobileMenuEnterActive,
          exitActive: styles.mobileMenuExit,
          exitDone: styles.mobileMenuExitActive,
        }}
      >
        <MobileMenu toggleMobileMenu={toggleMobileMenu} />
      </CSSTransition>
    </nav>
  );
}
