import { FC } from "react";

// Style
import styled from "styled-components";

interface Props {
  message: string;
}

const ErrorMessage = styled.p`
  color: #f43c3c;
  font-size: 14px;
  margin: 10px 0;
`;

export const InputErrors: FC<Props> = ({ message }): JSX.Element => {
  return <ErrorMessage>{message}</ErrorMessage>;
};
