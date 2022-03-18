import React from "react";
import InputBox from "./InputBox";
import styles from "./form.module.scss";

const Form = () => {
  return (
    <form className={styles.formMain}>
      <div className={styles.formBox}>
        <InputBox type="text" placeholder="Enter your First Name" />
        <InputBox type="mail" placeholder="Enter your Mail Address" />
      </div>
      <button type="button" className={styles.btn}>
        Join the wait-list
      </button>
    </form>
  );
};

export default Form;
