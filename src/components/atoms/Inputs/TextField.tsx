"use client";
import React from "react";

// Style
import styled from "styled-components";

// Errors
import { InputErrors } from "./InputErrors";

interface CustomTextFieldProps {
  label?: string;
  placeholder: string;
  name: string;
  register: any;
  errors: any;
  type?: string;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

const Label = styled.label`
  font-weight: 500;
  margin-bottom: 8px;
  font-size: 16px;
  color: #404d61;
`;

const InputStyled = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 8px;
  &::placeholder {
    color: #757d8a;
    font-size: 14px;
    font-weight: 400;
  }
`;

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
