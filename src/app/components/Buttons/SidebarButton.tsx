"use client";
import React from "react";

// Style
import styled from "styled-components";

interface SidebarButtonProps {
  label: string;
  selected: boolean;
  onClick: () => void;
}

const Button = styled.button<{ selected?: boolean }>`
  cursor: pointer;
  width: 26px;
  height: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: ${(props) => (props.selected ? "#4A3AFF" : "white")};
  color: ${(props) => (props.selected ? "white" : "black")};
  border-radius: 100%;
  font-weight: 500;
  font-size: 14px;
`;

export const SidebarButton: React.FC<SidebarButtonProps> = ({
  label,
  selected,
  onClick,
}) => {
  return (
    <Button selected={selected} onClick={onClick}>
      {label}
    </Button>
  );
};
