"use client";

// Style
import styled from "styled-components";

interface CustomButtonProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
}

const Button = styled.button<{ disabled?: boolean }>`
  cursor: ${(props) => (!props.disabled ? "pointer" : "auto")};
  width: 100%;
  height: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: ${(props) => (!props.disabled ? "#4a3aff" : "gray")};
  color: white;
  border-radius: 8px;
  font-weight: 400;
  font-size: 14px;
`;

export const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  onClick = () => {},
  disabled = false,
}) => {
  return (
    <Button type="submit" onClick={onClick} disabled={disabled}>
      {label}
    </Button>
  );
};
