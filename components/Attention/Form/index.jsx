import InputBox from "./InputBox";
import styles from "./form.module.scss";
import cogoToast from "cogo-toast";
import { WaitListSchema } from "../../../validations";
import { isAnEmpytyObject } from "../../../utils";
import { useFormik } from "formik";
import { FormError } from "./FormError";

const Form = ({ stopFlicker }) => {
  const options = {
    hideAfter: 5,
    position: "top-right",
  };

  const initialValues = {
    Email: "",
    FirstName: "",
  };

  const handleSubmit = (values) => {
    const { Email, FirstName } = values;
    const data = { Email, FirstName };

    let formData = new FormData();
    for (let value in data) {
      formData.append(value, data[value]);
    }

    console.log("make request here!");
    console.log(formik.values);

    if (formik.values.Email && formik.values.FirstName) {
      cogoToast.success(
        `Congrats ${formik.values.firstName}, you have just been added to the wait-list`,
        options
      );
      stopFlicker();
      setFieldValue("Email", "");
      setFieldValue("FirstName", "");
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit: handleSubmit,
    validationSchema: WaitListSchema,
    validateOnChange: false,
  });

  const { errors, setFieldValue } = formik;
  // useEffect(() => {
  //   if (Email) setFieldValue("Email", Email);
  // }, [Email]
  return (
    <>
      {!isAnEmpytyObject(errors) && <FormError errors={errors} />}
      <form className={styles.formMain} onSubmit={formik.handleSubmit}>
        <div className={styles.formBox}>
          <InputBox
            type="text"
            placeholder="Enter your First Name"
            name="FirstName"
            onChange={formik.handleChange}
          />
          <InputBox
            type="mail"
            placeholder="Enter your Mail Address"
            name="Email"
            onChange={formik.handleChange}
          />
        </div>
        <button type="submit" className={styles.btn}>
          Join the wait-list
        </button>
      </form>
    </>
  );
};

export default Form;
