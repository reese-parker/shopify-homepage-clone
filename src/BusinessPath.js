import React from 'react'
import styles from "./styles/BusinessPathStyles.module.css"

export default function BusinessPath(props) {
    const {svg, title, description} = props
  return (
    <div className={styles.container}>
        <img className={styles.svg} alt="" src={svg} />
        <p>{title}</p>
        <p>{description}</p>
    </div>
  )
}
