"use client";
import React from "react";
import styled from "styled-components";

interface CustomSelectProps {
  label?: string;
  placeholder: string;
  options: string[];
  selectedOption: string;
  onSelect: (option: string) => void;
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
  placeholder,
  options,
  selectedOption,
  onSelect,
}) => {
  return (
    <Wrapper>
      {label && <Label>{label}</Label>}
      <Select
        value={selectedOption}
        onChange={(event) => onSelect(event.target.value)}
      >
        <Option value="">{placeholder}</Option>
        {options.map((option) => (
          <Option key={option} value={option}>
            {option}
          </Option>
        ))}
      </Select>
    </Wrapper>
  );
};
