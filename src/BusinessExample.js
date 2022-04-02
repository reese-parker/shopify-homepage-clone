import React from "react";
import styles from "./styles/BusinessExampleStyles.module.css";

export default function BusinessExample(props) {
    const {image, business, name} = props

  return (
    <div className={styles.container}>
      <img className={styles.image} alt="" src={image} />
      <p className={styles.business}>{business}</p>
      <p className={styles.name}>{name}</p>
    </div>
  );
}
