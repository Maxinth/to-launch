import React from "react";
import styles from "./form.module.scss";

const InputBox = ({ type, placeholder, name, onChange, value }) => {
  return (
    <div className={styles.inputContainer}>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputBox;
