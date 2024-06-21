"use client";
import React from "react";
import { CustomSelect, CustomTextField } from "../Inputs";
import styled from "styled-components";
import { CustomButton } from "../Buttons";

const Container = styled.div`
  width: 410px;
  margin: 25px 0;
`;

const DoubleInput = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const InputBox = styled.div`
  width: 45%;
`;

const BusinessForm = ({}) => {
  return (
    <Container>
      <CustomTextField
        label="Business Name"
        placeholder="Registered business name"
        value=""
        onChange={() => {}}
      />

      <CustomSelect
        label="Type"
        options={["1", "2", "3"]}
        placeholder="Type of business"
        selectedOption=""
        onSelect={(option) => {
          console.log(option);
        }}
      />

      <CustomTextField
        label="Address"
        placeholder="Address line 1"
        value=""
        onChange={() => {}}
      />

      <CustomTextField
        placeholder="Address line 2"
        value=""
        onChange={() => {}}
      />

      <CustomTextField placeholder="City" value="" onChange={() => {}} />

      <DoubleInput>
        <InputBox>
          <CustomSelect
            options={["1", "2", "3"]}
            placeholder="State"
            selectedOption=""
            onSelect={(option) => {
              console.log(option);
            }}
          />
        </InputBox>

        <InputBox>
          <CustomTextField
            placeholder="Zip"
            value=""
            onChange={() => {}}
          />
        </InputBox>
      </DoubleInput>

      <CustomButton label="Continue" onClick={()=> {console.log('click')}}/>

    </Container>

  );
};

export default BusinessForm;
