import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";

export const useGetState: RootState = () => {
  const {
    step,
    status,
    apiMessage,
    businessForm: {
      fields: { name, type, address, optionalAddress, city, state, zip },
      error: businessFormError,
    },
    contactForm: {
      fields: { name: firstName, lastName, email, phone },
      error: contactFormError,
    },
  } = useAppSelector((state) => state.companyProccessReducer);

  return {
    step,
    status,
    apiMessage,
    businessForm: {
      name,
      type,
      address,
      optionalAddress,
      city,
      state,
      zip,
      businessFormError,
    },
    contactForm: { firstName, lastName, email, phone, contactFormError },
  };
};
