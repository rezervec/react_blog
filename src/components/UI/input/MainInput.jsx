import React from "react";
import styles from "./MainInput.module.css"

const MainInput = (props) => {
  return (
    <input className={styles.MainInput} {...props}/>
  )
}

export default MainInput