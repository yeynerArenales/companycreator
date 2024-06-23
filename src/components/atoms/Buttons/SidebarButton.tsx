"use client";

// Style
import styled from "styled-components";
import { MdDone } from "react-icons/md";

interface SidebarButtonProps {
  label: string;
  status: string;
  onClick: () => void;
}

const Button = styled.button<{ $status: string }>`
  cursor: pointer;
  width: 26px;
  height: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: ${(props) => {
    switch (props.$status) {
      case "success":
        return "#4ADE80";
      case "selected":
        return "#4A3AFF";
      default:
        return "white";
    }
  }};
  color: ${(props) => (props.$status == "selected" ? "white" : "black")};
  border-radius: 100%;
  font-weight: 500;
  font-size: 14px;
`;

const Icon = styled(MdDone)`
  color: white;
`;

export const SidebarButton: React.FC<SidebarButtonProps> = ({
  label,
  status,
  onClick,
}) => {
  return (
    <Button $status={status} onClick={onClick}>
      {status === "success" ? <Icon /> : label}
    </Button>
  );
};
