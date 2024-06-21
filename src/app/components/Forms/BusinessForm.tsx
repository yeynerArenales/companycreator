"use client";
import React from "react";

// Style
import styled from "styled-components";

// Form
import { useForm, SubmitHandler } from "react-hook-form";

// Components
import { CustomSelect, CustomTextField } from "../Inputs";
import { CustomButton } from "../Buttons";

const Form = styled.form`
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
  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      businessName: "",
      type: "",
      address: "",
      address_2: "",
      city: "",
      state: "",
      zip: "",
    },
  });

  const onSubmit: SubmitHandler<any> = (data) => console.log(data);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <CustomTextField
        label="Business Name"
        placeholder="Registered business name"
        register={register}
        name="businessName"
      />

      <CustomSelect
        label="Type"
        options={["1", "2", "3"]}
        control={control}
        name="type"
      />

      <CustomTextField
        label="Address"
        placeholder="Address line 1"
        register={register}
        name="address"
      />

      <CustomTextField
        placeholder="Address line 2"
        name="address_2"
        register={register}
      />

      <CustomTextField placeholder="City" name="city" register={register} />

      <DoubleInput>
        <InputBox>
          <CustomSelect
            options={["1", "2", "3"]}
            control={control}
            name="state"
          />
        </InputBox>

        <InputBox>
          <CustomTextField name="zip" placeholder="Zip" register={register} />
        </InputBox>
      </DoubleInput>

      <CustomButton
        label="Continue"
        onClick={() => {
          console.log("click");
        }}
      />
    </Form>
  );
};

export default BusinessForm;
