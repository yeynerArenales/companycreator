"use client";
import React from "react";
import styled from "styled-components";

interface CustomButtonProps {
  label: string;
  onClick: () => void;
}

const Button = styled.button<{ selected?: boolean }>`
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
`;

export const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  onClick,
}) => {
  return <Button onClick={onClick}>{label}</Button>;
};
