// import {useState} from "react";
import InputBox from "./InputBox";
import styles from "./form.module.scss";
import cogoToast from "cogo-toast";

const Form = () => {
  const options = {
    hideAfter: "5",
    position: "top-right",
  };
  const handleSubmit = () => {
    cogoToast.success("You have been added to the wait-list", options);
  };

  return (
    <form className={styles.formMain}>
      <div className={styles.formBox}>
        <InputBox type="text" placeholder="Enter your First Name" />
        <InputBox type="mail" placeholder="Enter your Mail Address" />
      </div>
      <button type="button" className={styles.btn} onClick={handleSubmit}>
        Join the wait-list
      </button>
    </form>
  );
};

export default Form;
