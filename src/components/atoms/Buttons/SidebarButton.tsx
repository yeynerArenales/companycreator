"use client";

// Components
import { CustomSidebarButton, Icon } from "./styles";

interface SidebarButtonProps {
  label: string;
  status: string;
  onClick: () => void;
}

export const SidebarButton: React.FC<SidebarButtonProps> = ({
  label,
  status,
  onClick,
}) => {
  return (
    <CustomSidebarButton $status={status} onClick={onClick}>
      {status === "success" ? <Icon /> : label}
    </CustomSidebarButton>
  );
};
