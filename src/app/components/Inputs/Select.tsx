"use client";
import React from "react";

// Style
import styled from "styled-components";

// Form
import { Controller } from "react-hook-form";

// Errors
import { InputErrors } from "./InputErrors";

interface CustomSelectProps {
  label?: string;
  options: string[];
  control: any;
  name: string;
  errors: any;
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  width: 100%;
`;

const Label = styled.label`
  font-weight: 500;
  margin-bottom: 8px;
  font-size: 16px;
  color: #404d61;
`;

const Select = styled.select`
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
  &[selected] {
    color: #757d8a;
  }
`;

const Option = styled.option`
  color: #757d8a;
  font-size: 14px;
  font-weight: 400;
`;

export const CustomSelect: React.FC<CustomSelectProps> = ({
  label = null,
  options,
  control,
  name,
  errors,
}) => {
  return (
    <Wrapper>
      {label && <Label>{label}</Label>}
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <Select {...field}>
            {options.map((option) => (
              <Option key={option} value={option}>
                {option}
              </Option>
            ))}
          </Select>
        )}
      />
      {errors[name] && <InputErrors message={errors[name].message}/>}
    </Wrapper>
  );
};
