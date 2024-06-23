import { FC } from "react";

// Style
import styled from "styled-components";
import { IoIosWarning } from "react-icons/io";

interface Props {
  message: string;
}

const ErrorMessage = styled.p`
  color: #f43c3c;
  font-size: 14px;
  margin: 10px 0;
  display: flex;
  align-items: center;
`;

export const WarningIcon = styled(IoIosWarning)`
  width: 18px;
  height: 16px;
  color: #f43c3c;
  margin-right: 5px;
`;

export const InputErrors: FC<Props> = ({ message }): JSX.Element => {
  return (
    <ErrorMessage>
      <WarningIcon />
      {message}
    </ErrorMessage>
  );
};
