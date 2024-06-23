import styled from "styled-components";

export const Container = styled.div`
  width: 410px;
  margin: 25px 0;
  
  @media (max-width: 600px) {
    width: 80%;
  }
`;

export const SubTitle = styled.h2`
  font-weight: 500;
  margin-bottom: 8px;
  font-size: 16px;
  color: #404d61;
  margin-top: 0;
`;

export const BoxProperties = styled.div<{ $bottom?: boolean }>`
  width: 100%;
  height: auto;
  display: flex;
  margin-bottom: ${(props) => (props.$bottom ? "20px" : 0)};
`;

export const Key = styled.h3`
  font-size: 14px;
  color: #757d8a;
  font-weight: 500;
  width: 137px;
  margin: 10px 0;
`;

export const Value = styled.p`
  margin: 10px 0;
  font-size: 14px;
  color: #404d61;
  font-weight: 500;
  text-overflow: ellipsis;
  max-width: 273px;
`;

export const ResponseBox = styled.div<{ $error?: boolean }>`
  margin: 20px 0;
  height: auto;
  padding: 12px 16px;
  border: ${(props) =>
    props.$error ? "1px solid #EF4444" : "1px solid #008000"};
  color: ${(props) => (props.$error ? "#EF4444" : "#008000")};
  background-color: ${(props) => (props.$error ? "#EF444414" : "#00800014")};
  border-radius: 8px;
  font-size: 16px;
`;
