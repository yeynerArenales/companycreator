"use client";
import React from "react";
import styled from "styled-components";

interface CustomTextFieldProps {
  label?: string;
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
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
  value,
  onChange,
}) => {
  return (
    <Wrapper>
      {label && <Label>{label}</Label>}
      <InputStyled
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </Wrapper>
  );
};
