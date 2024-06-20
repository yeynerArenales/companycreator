"use client";
import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
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

const Sidebar = () => {
  const buttons: number[] = [1, 2, 3];
  const [form, setForm] = useState(1);
  return (
    <Container>
      {buttons.map((b) => (
        <Button selected={b == form && true} onClick={() => setForm(b)} key={b}>
          {b}
        </Button>
      ))}
    </Container>
  );
};

export default Sidebar;
