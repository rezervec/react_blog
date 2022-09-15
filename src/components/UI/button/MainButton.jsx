import React from "react";
import styles from "./MainButton.module.css";

const MainButton = ({children, ...props}) => {
  return(
    <button {...props} className={styles.MainButton}>{children}</button>
  );
};

export default MainButton;