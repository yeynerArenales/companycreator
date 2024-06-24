import styled from "styled-components";

export const Container = styled.div`
  width: 410px;
  margin: 25px 0;

  @media (max-width: 600px) {
    width: 75%;
  }
`;

export const SubTitleBox = styled.div`
  display: flex;
  align-items: center;
`;

export const SubTitle = styled.h2`
  width: 40%;
  font-weight: 500;
  margin-bottom: 8px;
  font-size: 16px;
  color: #404d61;
  margin: 0;

  @media (max-width: 500px) {
    width: 60%;
  }
`;

export const Link = styled.p`
  color: #4a3aff;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  text-decoration: underline;
  background-color: transparent;
  box-shadow: 0px 4px 4px 0px #00000040;
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
  
  @media (max-width: 500px) {
    width: 40%;
  }
`;

export const Value = styled.p`
  margin: 10px 0;
  font-size: 14px;
  color: #404d61;
  font-weight: 500;
  text-overflow: ellipsis;
  word-break: break-all;
  max-width: 273px;
  
  @media (max-width: 500px) {
    width: 60%;
  }
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
