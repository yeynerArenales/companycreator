"use client";

// Components
import { CustomSidebarButton, DoneIcon } from "./styles";

interface SidebarButtonProps {
  label: string;
  status: string;
  onClick: () => void;
  disabled?: boolean;
}

export const SidebarButton: React.FC<SidebarButtonProps> = ({
  label,
  status,
  onClick,
  disabled = false,
}) => {
  return (
    <CustomSidebarButton disabled={disabled} $successDisabled={disabled} $status={status} onClick={onClick}>
      {status === "success" ? <DoneIcon /> : label}
    </CustomSidebarButton>
  );
};
