import { useEffect } from "react";

// Components
import { CustomButton } from "../../atoms/Buttons";
import {
  Container,
  SubTitle,
  BoxProperties,
  Key,
  Value,
  ResponseBox,
  SubTitleBox,
  Link,
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
  setStep,
  setApiMessage,
} from "@/redux/features/companyProcessSlice";

// Hooks
import { useCreateFieldsForApi } from "@/hooks/useCreateFieldsForApi";

interface ApiResponse {
  status: string;
  message: string;
}

export const Review = ({}) => {
  const {
    status,
    apiMessage,
    businessForm: {
      fields: { name, type, address, optionalAddress, city, state, zip },
    },
    contactForm: {
      fields: { name: firstName, lastName, email, phone },
    },
  } = useAppSelector((state) => state.companyProccessReducer);
  const dispatch = useDispatch();
  const { fields } = useCreateFieldsForApi();

  const [postCompany, { isLoading, error }] = usePostCompanyMutation();
  const handleSubmit = async () => {
    if (status === "success") {
      dispatch(setInitialState());
    } else {
      try {
        handleApiResponse(await postCompany(fields).unwrap());
      } catch (err) {
        console.error(err);
      }
    }
  };

  useEffect(() => {
    if (error?.status === 500) {
      dispatch(setStatus("error"));
      dispatch(setApiMessage(error.message));
    }
  }, [error]);

  const handleApiResponse = ({ status, message }: ApiResponse) => {
    switch (status) {
      case "ok":
        dispatch(setStatus("success"));
        dispatch(setApiMessage(message));
        break;

      case "error":
        dispatch(setStatus("error"));
        dispatch(setApiMessage(message));
        break;

      default:
        break;
    }
  };

  const isAddressAbbrevation = () => {
    return states.find((s) => s.name === state)?.abbreviation;
  };

  return (
    <Container>
      <SubTitleBox>
        <SubTitle>Business structure</SubTitle>
        <Link onClick={() => dispatch(setStep(1))}>Edit</Link>
      </SubTitleBox>
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
        <Value>
          {`${address} ${optionalAddress ?? ""}`}
          <br />
          {`${city}, ${isAddressAbbrevation() ?? ""} ${zip}`}
        </Value>
      </BoxProperties>

      <SubTitleBox>
        <SubTitle>Contact Person</SubTitle>
        <Link onClick={() => dispatch(setStep(2))}>Edit</Link>
      </SubTitleBox>
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
