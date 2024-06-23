"use client";
import React from "react";

// Style
import styled from "styled-components";
import { CustomButton } from "../../atoms/Buttons";

// Components

const Container = styled.div`
  width: 410px;
  margin: 25px 0;
`;

const SubTitle = styled.h2`
  font-weight: 500;
  margin-bottom: 8px;
  font-size: 16px;
  color: #404d61;
  margin-top: 0;
`;

const BoxProperties = styled.div`
  width: 100%;
  height: auto;
  display: flex;
`;

const Key = styled.h3`
  font-size: 14px;
  color: #757d8a;
  font-weight: 500;
  width: 137px;
  margin: 10px 0;
`;

const Value = styled.p`
  margin: 10px 0;
  font-size: 14px;
  color: #404d61;
  font-weight: 500;
  text-overflow: ellipsis;
  max-width: 273px;
`;

export const Review = ({}) => {
  return (
    <Container>
      <SubTitle>Business structure</SubTitle>
      <BoxProperties>
        <Key>Name:</Key>
        <Value>Sancrisoft, LLC</Value>
      </BoxProperties>
      <BoxProperties>
        <Key>Type:</Key>
        <Value>Limited Liability Company</Value>
      </BoxProperties>
      <BoxProperties>
        <Key>Address:</Key>
        <Value>123 Main Street Suite 123 Tampa, FL 33626</Value>
      </BoxProperties>

      <SubTitle>Contact Person</SubTitle>
      <BoxProperties>
        <Key>Name:</Key>
        <Value>John Doe</Value>
      </BoxProperties>
      <BoxProperties>
        <Key>Email:</Key>
        <Value>john@sancrisoft.com</Value>
      </BoxProperties>
      <BoxProperties>
        <Key>Phone:</Key>
        <Value>+1 305-305-9988</Value>
      </BoxProperties>

      <CustomButton marginTop="25px" label="Confirm & Submit" />
    </Container>
  );
};
