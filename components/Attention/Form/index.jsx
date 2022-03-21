// import {useState} from "react";
import InputBox from "./InputBox";
import styles from "./form.module.scss";
import cogoToast from "cogo-toast";
import { WaitListSchema } from "../../../validations";
import { isAnEmpytyObject } from "../../../utils";
import { useFormik } from "formik";

const Form = () => {
  const options = {
    hideAfter: "5",
    position: "top-right",
  };
  const handleSubmit = async (values) => {
    // cogoToast.success("You have been added to the wait-list", options);
    /**Destructuring the values below so that data used for validation on client side not required by the endpoint isn't passed along */
    const { Email, FirstName } = values;
    const data = { Email, FirstName };

    let formData = new FormData();
    for (let value in data) {
      formData.append(value, data[value]);
    }

    await console.log("make request here!");
    console.log(formData);
    // cogoToast.success("You have been added to the wait-list", options);
  };

  const initialValues = {
    Email: "",
    FirstName: "",
  };

  const formik = useFormik({
    initialValues,
    onSubmit: handleSubmit,
    validationSchema: WaitListSchema,
    validateOnChange: false,
  });

  const { errors } = formik;
  // useEffect(() => {
  //   if (Email) setFieldValue("Email", Email);
  // }, [Email]);
  return (
    <>
      {/* {!isAnEmpytyObject(errors) && <FormError errors={errors} />} */}
      <form className={styles.formMain}>
        <div className={styles.formBox}>
          <InputBox type="text" placeholder="Enter your First Name" />
          <InputBox type="mail" placeholder="Enter your Mail Address" />
        </div>
        <button type="button" className={styles.btn} onClick={handleSubmit}>
          Join the wait-list
        </button>
      </form>
    </>
  );
};

export default Form;
