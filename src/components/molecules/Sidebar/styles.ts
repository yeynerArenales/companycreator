import styled from "styled-components";

export const Container = styled.div`
  width: 30%;
  height: auto;
  display: flex;
  @media (max-width: 600px) {
    width: 20%;
  }
`;

export const ButtonsBox = styled.div`
  width: 33px;
  height: 155px;
  background: #d9d9d970;
  border-radius: 109px;
  margin: 20px 0 10px 80px;
  padding: 5px 0;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;

  @media (max-width: 600px) {
    margin: 20px 10px 0 20px;
  }
`;

export const SubTitlesBox = styled.div`
  width: 200px;
  height: 155px;
  margin: 25px 0 00px 80px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  margin-left: 30px;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const SubTitle = styled.h2`
  width: 100%;
  color: black;
  font-weight: 500;
  margin: 0;
  font-size: 16px;
`;
