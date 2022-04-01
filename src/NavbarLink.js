import React, { useRef } from "react";
import navbarLinkDownArrow from "./images/navbarLinkDownArrow.svg";
import styles from "./styles/NavbarLinkStyles.module.css";
import useToggleState from "./hooks/useToggleState";
import NavbarDropdownMenu from "./NavbarDropdownMenu";
import useOnClickOutside from "./hooks/useOnClickOutside";

export default function NavbarLink(props) {
  const { text } = props;
  const [showDropdownMenu, toggleDropdownMenu] = useToggleState(false);

  const ref = useRef();

  useOnClickOutside(ref, () => {
    toggleDropdownMenu();
  });

  return (
    <>
      <li className={styles.navbarDesktopLink} onClick={toggleDropdownMenu}>
        <span className={styles.navbarDesktopLink}>{text}</span>
        <img
          className={styles.navbarLinkArrow}
          onClick={toggleDropdownMenu}
          alt=""
          src={navbarLinkDownArrow}
        />

        {showDropdownMenu ? (
          <NavbarDropdownMenu ref={ref} open={showDropdownMenu} menu={text} />
        ) : null}
      </li>
    </>
  );
}
