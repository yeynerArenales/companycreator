import { useAppSelector } from "@/redux/hooks";

export const useCreateFieldsForApi = () => {
  const {
    businessForm: {
      fields: { name, type, address, optionalAddress, city, state, zip },
    },
    contactForm: {
      fields: { name: firstName, lastName, email, phone },
    },
  } = useAppSelector((state) => state.companyProccessReducer);
  const fields = {
    name,
    type,
    address: {
      line1: address,
      line2: optionalAddress,
      city,
      state,
      zip,
    },
    contact: {
      firstName,
      lastName,
      email,
    },
  };

  return {fields};
};
