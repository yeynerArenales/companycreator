import styled from "styled-components";

export const Form = styled.form`
  width: 410px;
  margin: 25px 0;
  
  @media (max-width: 600px) {
    width: 75%;
  }
`;

export const DoubleInput = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const InputBox = styled.div<{ $address?: boolean }>`
  width: 45%;
  &:last-child {
    margin-top: ${(props) => (props.$address ? "25px" : 0)};
  }
`;
