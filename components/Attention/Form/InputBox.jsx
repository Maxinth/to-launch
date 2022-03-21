import React from "react";
import styles from "./form.module.scss";

const InputBox = ({ type, placeholder }) => {
  return (
    <div className={styles.inputContainer}>
      <input type={type} placeholder={placeholder} />
    </div>
  );
};

export default InputBox;
