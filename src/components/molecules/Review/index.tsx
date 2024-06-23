// Style
import styled from "styled-components";

// Redux
import { useAppSelector } from "@/redux/hooks";

// Components
import { CustomButton } from "../../atoms/Buttons";

// Utils
import { states } from "@/utils/constants";

const Container = styled.div`
  width: 410px;
  margin: 25px 0;
`;

const SubTitle = styled.h2`
  font-weight: 500;
  margin-bottom: 8px;
  font-size: 16px;
  color: #404d61;
  margin-top: 0;
`;

const BoxProperties = styled.div`
  width: 100%;
  height: auto;
  display: flex;
`;

const Key = styled.h3`
  font-size: 14px;
  color: #757d8a;
  font-weight: 500;
  width: 137px;
  margin: 10px 0;
`;

const Value = styled.p`
  margin: 10px 0;
  font-size: 14px;
  color: #404d61;
  font-weight: 500;
  text-overflow: ellipsis;
  max-width: 273px;
`;

export const Review = ({}) => {
  const {
    businessForm: {
      fields: { name, type, address, optionalAddress, city, state, zip },
    },
    contactForm: {
      fields: { name: firstName, lastName, email, phone },
    },
  } = useAppSelector((state) => state.companyProccessReducer);

  const getAddressformated = (data: any) => {
    const isAddressAbbrevation = data?.state?.find(
      (s: any) => s.name === state
    )?.abbreviation;
    return `${data.address} ${optionalAddress ?? ""} ${city}, ${
      isAddressAbbrevation ?? ""
    } ${zip}`;
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
      <BoxProperties>
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
      <BoxProperties>
        <Key>Phone:</Key>
        <Value>{phone}</Value>
      </BoxProperties>

      <CustomButton label="Confirm & Submit" />
    </Container>
  );
};
