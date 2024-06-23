// Components
import { CustomButton } from "../../atoms/Buttons";
import {
  Container,
  SubTitle,
  BoxProperties,
  Key,
  Value,
  ResponseBox,
} from "./styles";

// Utils
import { states } from "@/utils/constants";

// Redux
import { useAppSelector } from "@/redux/hooks";
import { usePostCompanyMutation } from "@/redux/services/companyApi";

export const Review = ({}) => {
  const {
    businessForm: {
      fields: { name, type, address, optionalAddress, city, state, zip },
    },
    contactForm: {
      fields: { name: firstName, lastName, email, phone },
    },
  } = useAppSelector((state) => state.companyProccessReducer);

  const [postCompany, { isLoading, data, error }] = usePostCompanyMutation();

  const handleSubmit = async () => {
    try {
      const data = {
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
      const response = await postCompany(data).unwrap();
      console.log(response);
    } catch (err) {
      console.error(err);
    }
  };

  const getAddressformated = (data: any) => {
    const isAddressAbbrevation = states.find(
      (s: any) => s.name === data.state
    )?.abbreviation;
    return `${data.address} ${data.optionalAddress ?? ""} ${data.city}, ${
      isAddressAbbrevation ?? ""
    } ${data.zip}`;
  };

  const addressformated = getAddressformated({
    address,
    optionalAddress,
    city,
    state,
    zip,
  });

  return (
    <Container>
      <SubTitle>Business structure</SubTitle>
      <BoxProperties>
        <Key>Name:</Key>
        <Value>{name}</Value>
      </BoxProperties>
      <BoxProperties>
        <Key>Type:</Key>
        <Value>{type}</Value>
      </BoxProperties>
      <BoxProperties bottom>
        <Key>Address:</Key>
        <Value>{addressformated}</Value>
      </BoxProperties>

      <SubTitle>Contact Person</SubTitle>
      <BoxProperties>
        <Key>Name:</Key>
        <Value>{firstName + " " + lastName}</Value>
      </BoxProperties>
      <BoxProperties>
        <Key>Email:</Key>
        <Value>{email}</Value>
      </BoxProperties>
      <BoxProperties bottom>
        <Key>Phone:</Key>
        <Value>{phone}</Value>
      </BoxProperties>

      <ResponseBox error>
        Thanks for submitting your company! We’ll be in touch shortly.
      </ResponseBox>

      <CustomButton
        disabled={isLoading}
        label="Confirm & Submit"
        onClick={handleSubmit}
      />
    </Container>
  );
};
