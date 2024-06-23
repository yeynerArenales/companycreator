import { useEffect, useState } from "react";

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
import { useDispatch } from "react-redux";
import {
  setStatus,
  setInitialState,
} from "@/redux/features/companyProcessSlice";

interface ApiResponse {
  status: string;
  message: string;
}

export const Review = ({}) => {
  const {
    status,
    businessForm: {
      fields: { name, type, address, optionalAddress, city, state, zip },
    },
    contactForm: {
      fields: { name: firstName, lastName, email, phone },
    },
  } = useAppSelector((state) => state.companyProccessReducer);
  const dispatch = useDispatch();

  const [postCompany, { isLoading, data, error }] = usePostCompanyMutation();
  const [apiMessage, setApiMessage] = useState<string>("");

  const createFieldsForApi = () => ({
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
  });

  const handleSubmit = async () => {
    if (status === "success") {
      setInitialState();
    } else {
      try {
        handleApiResponse(await postCompany(createFieldsForApi()).unwrap());
      } catch (err) {
        console.error(err);
      }
    }
  };

  useEffect(() => {
    if (error?.status === "500") {
      dispatch(setStatus("error"));
      setApiMessage(error.message);
    }
    console.log(error);
  }, [error]);

  const handleApiResponse = ({ status, message }: ApiResponse) => {
    switch (status) {
      case "ok":
        dispatch(setStatus("success"));
        setApiMessage(message);
        break;

      case "error":
        dispatch(setStatus("error"));
        setApiMessage(message);
        break;

      default:
        break;
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
      <BoxProperties $bottom>
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
      <BoxProperties $bottom>
        <Key>Phone:</Key>
        <Value>{phone}</Value>
      </BoxProperties>

      {status === "success" && <ResponseBox>{apiMessage}</ResponseBox>}

      <CustomButton
        disabled={isLoading}
        type="button"
        label={status === "success" ? "Start Over" : "Confirm & Submit"}
        onClick={() => handleSubmit()}
      />

      {status === "error" && <ResponseBox $error>{apiMessage}</ResponseBox>}
    </Container>
  );
};
