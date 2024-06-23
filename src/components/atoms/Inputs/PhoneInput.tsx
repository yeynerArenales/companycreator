import { FC } from "react";

// Form
import { Controller } from "react-hook-form";

// Components
import { Wrapper, Label } from "./styles";

// React-phone-input-2 Library
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";
import styled from "styled-components";

// Components

interface ICustomPhoneInput {
  label?: string;
  placeholder?: string;
  control: any;
  name: string;
  errors: any;
}

const PhoneInputStyled = styled(PhoneInput)`
  width: 100%;
  height: 33px;
  margin-bottom: 15px;

  .special-label{
    display: none !important;
  }

  .form-control{
    width: 100%;
    height: 33px;
  }

  & input {
    width: 100%;
    height: 33px;
  }
`;

export const CustomPhoneInput: FC<ICustomPhoneInput> = ({
  label = null,
  placeholder,
  control,
  name,
  errors,
}): JSX.Element => {
  return (
    <Wrapper>
      {label && <Label>{label}</Label>}
      <Controller
        control={control}
        name={name}
        rules={{ required: true }}
        render={({ field: { ref, ...field } }) => (
          <PhoneInputStyled
            {...field}
            inputProps={{
              ref,
            }}
            country={'us'}
            countryCodeEditable={false}
            placeholder={placeholder}
            isValid={!Boolean(errors[name])}
          />
        )}
      />
    </Wrapper>
  );
};
