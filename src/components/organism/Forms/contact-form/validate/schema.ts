import { string, object } from "yup";

export const contactFormSchema = object().shape({
  name: string().required("First name is required"),
  lastName: string().required("Last name is required"),
  email: string()
    .required("Please enter your email address")
    .matches(
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please enter a valid email address"
    ),
  phone: string().required("Phone is required").length(9)
});
