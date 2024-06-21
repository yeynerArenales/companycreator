import { string, object } from "yup";

export const businessFormSchema = object().shape({
  businessName: string().required("Business Name is required"),
  type: string().required("Type is required"),
  address: string().required("Address is required"),
  address_2: string(),
  city: string().required("City is required"),
  state: string().required("State is required"),
  zip: string().required("Zip is required"),
});

export interface IBusinessForm {
  businessName: string;
  type: string;
  address: string;
  address_2: string;
  city: string;
  state: string;
  zip: string;
}
