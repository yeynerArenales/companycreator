"use client";
import React from "react";

// Components
import { Wrapper, InputStyled, Label } from "./styles";

// Errors
import { InputErrors } from "./InputErrors";

// Form
import { DeepMap, FieldError } from "react-hook-form";

interface CustomTextFieldProps {
  label?: string;
  placeholder: string;
  name: string;
  register: any;
  errors: DeepMap<any, FieldError>;
  type?: string;
}

export const CustomTextField: React.FC<CustomTextFieldProps> = ({
  label = null,
  placeholder,
  register,
  name,
  errors,
  type = "text",
}) => {
  return (
    <Wrapper>
      {label && <Label>{label}</Label>}
      <InputStyled placeholder={placeholder} type={type} {...register(name)} />
      {errors[name] && <InputErrors message={errors[name].message} />}
    </Wrapper>
  );
};
