import React from "react";
import { CSSTransition } from "react-transition-group";

import navbarLinkDownArrow from "./images/navbarLinkDownArrow.svg";
import MobileMenuDropdownMenu from "./MobileMenuDropdownMenu";
import styles from "./styles/MobileMenuLinkStyles.module.css";
import useToggleState from "./hooks/useToggleState";

export default function MobileMenuLink(props) {
  const { text, dropdown } = props;
  const [showDropdownMenu, toggleDropdownMenu] = useToggleState(false);

  return (
    <>
      <li className={styles.mobileMenuLink} onClick={toggleDropdownMenu}>
        <span className="navbarDesktopLink">{text}</span>
        {dropdown && (
          <img
            onClick={toggleDropdownMenu}
            className="navbarLinkArrow"
            alt=""
            src={navbarLinkDownArrow}
          />
        )}
      </li>

          {dropdown && (
            <CSSTransition
        in={showDropdownMenu}
        mountOnEnter
        appear
        unmountOnExit
        timeout={0}
        classNames={{
          enterActive: styles.dropdownMenuEnter,
          enterDone: styles.dropdownMenuEnterActive,
          exitActive: styles.dropdownMenuExit,
          exitDone: styles.dropdownMenuExitActive,
        }}
      >
            <MobileMenuDropdownMenu open={showDropdownMenu} menu={text} />
            </CSSTransition>
          )}

    </>
  );
}
