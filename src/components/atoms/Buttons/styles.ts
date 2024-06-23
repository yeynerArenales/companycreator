import styled from "styled-components";
import { MdDone } from "react-icons/md";

export const CustomSidebarButton = styled.button<{ $status: string }>`
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

export const Button = styled.button<{ disabled?: boolean }>`
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

export const Icon = styled(MdDone)`
  color: white;
`;
