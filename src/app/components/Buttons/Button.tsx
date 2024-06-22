"use client";
import React from "react";

// Style
import styled from "styled-components";

interface CustomButtonProps {
  label: string;
  marginTop?: string;
}

const Button = styled.button<{ marginTop?: string }>`
  cursor: pointer;
  width: 100%;
  height: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: #4a3aff;
  color: white;
  border-radius: 8px;
  font-weight: 400;
  font-size: 14px;
  margin-top: ${(props) => (props.marginTop ? props.marginTop : 0)};
`;

export const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  marginTop = "",
}) => {
  return (
    <Button marginTop={marginTop} type="submit">
      {label}
    </Button>
  );
};
