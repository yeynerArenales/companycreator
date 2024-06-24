import styled from "styled-components";

// Icons
import { IoIosWarning } from "react-icons/io";

// Phone Input
import PhoneInput from "react-phone-input-2";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const Label = styled.label`
  font-weight: 500;
  margin-bottom: 8px;
  font-size: 16px;
  color: #404d61;
`;

export const InputStyled = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 8px;
  &::placeholder {
    color: #757d8a;
    font-size: 14px;
    font-weight: 400;
  }
`;

export const Select = styled.select`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 8px;
  appearance: none;
  background-image: url("/arrow-down.svg");
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 16px;
  &::placeholder {
    color: #757d8a;
    font-size: 12px;
    font-weight: 400;
  }

  & svg path {
    fill: #757d8a;
  }
  & option {
    color: #757d8a;
  }
`;

export const Option = styled.option`
  color: #757d8a;
  font-size: 14px;
  font-weight: 400;
`;

export const ErrorMessage = styled.p`
  color: #f43c3c;
  font-size: 14px;
  margin: 10px 0;
  display: flex;
  align-items: center;
`;

export const WarningIcon = styled(IoIosWarning)`
  width: 18px;
  height: 16px;
  color: #f43c3c;
  margin-right: 5px;
`;

export const PhoneInputStyled = styled(PhoneInput)`
width: 100%;
height: 33px;
margin-bottom: 15px;

.special-label {
  display: none !important;
}

.form-control {
  width: 100%;
  height: 33px;
}

& input {
  width: 100%;
  height: 33px;
}
`;