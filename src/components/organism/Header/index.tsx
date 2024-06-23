"use client";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  border-bottom: 1px solid #eceeeb;
`;

const Title = styled.h1`
  color: black;
  font-weight: 500;
  font-size: 16px;
  line-height: 40px;
  padding: 20px 0 10px 80px;
`;

const Header = () => {
  return (
    <Container>
      <Title>New Company</Title>
    </Container>
  );
};

export default Header;
