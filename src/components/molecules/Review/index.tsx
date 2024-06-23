// Style
import styled from "styled-components";

// Components
import { CustomButton } from "../../atoms/Buttons";

// Utils
import { states } from "@/utils/constants";

// Redux
import { useAppSelector } from "@/redux/hooks";
import { usePostCompanyMutation } from "@/redux/services/companyApi";

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

  const [postCompany, { isLoading, data, error }] = usePostCompanyMutation();

  const handleSubmit = async () => {
    try {
      const data = {
        name: "hola",
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
