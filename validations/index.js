import * as Yup from "yup";

export const WaitListSchema = () => {
  return Yup.object().shape({
    Email: Yup.string().email().required("Please input a valid email address"),
    FirstName: Yup.string().required("Please enter your first name"),
  });
};
