"use client";

// Components
import { Button } from './styles'

interface CustomButtonProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "submit" | "button" | "reset" | undefined;
}


export const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  onClick = () => {},
  disabled = false,
  type = "submit",
}) => {
  return (
    <Button type={type} onClick={onClick} disabled={disabled}>
      {label}
    </Button>
  );
};
