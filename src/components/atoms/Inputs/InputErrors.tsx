import { FC } from "react";

// Components
import { ErrorMessage, WarningIcon } from "./styles";

interface Props {
  message: string;
}
export const InputErrors: FC<Props> = ({ message }): JSX.Element => {
  return (
    <ErrorMessage>
      <WarningIcon />
      {message}
    </ErrorMessage>
  );
};
