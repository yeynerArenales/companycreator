import { string, object, number } from "yup";

export const businessFormSchema = object().shape({
  name: string().required("Business Name is required"),
  type: string().required("Type is required"),
  address: string().required("Address is required"),
  optionalAddress: string(),
  city: string().required("City is required"),
  state: string().required("State is required"),
  zip: string().required("Zip is required").length(5),
});