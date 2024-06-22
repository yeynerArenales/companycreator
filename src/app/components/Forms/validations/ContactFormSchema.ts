import { string, object } from "yup";

export const contactFormSchema = object().shape({
  firstname: string().required("First name is required"),
  lastname: string().required("Last name is required"),
  email: string()
    .required("Please enter your email address")
    .matches(
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please enter a valid email address"
    ),
});

export interface IContactForm {
  firstname: string;
  lastname: string;
  email: string;
}
