"use client";
import React, { useState } from "react";
import styled from "styled-components";
import BusinessForm from "../../utils/Forms/BusinessForm";

const Container = styled.div`
  width: 30%;
  height: auto;
  display: flex;
`;

const ButtonsBox = styled.div`
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
`;

const Button = styled.button<{ selected?: boolean }>`
  cursor: pointer;
  width: 26px;
  height: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: ${(props) => (props.selected ? "#4A3AFF" : "white")};
  color: ${(props) => (props.selected ? "white" : "black")};
  border-radius: 100%;
  font-weight: 500;
  font-size: 14px;
`;
const SubTitlesBox = styled.div`
  width: 200px;
  height: 155px;
  margin: 25px 0 00px 80px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  margin-left: 30px;
`;

const SubTitle = styled.h2`
  width: 100%;
  color: black;
  font-weight: 500;
  margin: 0;
  font-size: 16px;
`;

const Test = styled.div`
  width: 100%;
  display: flex;
`;

const Sidebar = () => {
  const buttons: number[] = [1, 2, 3];
  const subtitles: string[] = [
    "Business structure",
    "Contact person",
    "Review & submit",
  ];
  const [form, setForm] = useState(1);
  return (
    <Test>
      <Container>
        <ButtonsBox>
          {buttons.map((b) => (
            <Button
              selected={b == form && true}
              onClick={() => setForm(b)}
              key={b}
            >
              {b}
            </Button>
          ))}
        </ButtonsBox>
        <SubTitlesBox>
          {subtitles.map((sub) => (
            <SubTitle key={sub}>{sub}</SubTitle>
          ))}
        </SubTitlesBox>
      </Container>

      <BusinessForm />
    </Test>
  );
};

export default Sidebar;
