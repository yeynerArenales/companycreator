"use client";
import React from "react";

// Style
import styled from "styled-components";

// Form
import { useForm, SubmitHandler } from "react-hook-form";

// Components
import { CustomTextField } from "@/components/atoms/Inputs";
import { CustomButton } from "@/components/atoms/Buttons";

// validations
import { yupResolver } from "@hookform/resolvers/yup";
import { IContactForm, contactFormSchema } from "./validations";

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
  &:last-child {
    margin-top: 25px;
  }
`;

export const ContactForm = ({}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IContactForm>({
    criteriaMode: "all",
    resolver: yupResolver(contactFormSchema),
  });

  const onSubmit: SubmitHandler<any> = (data) => console.log(data);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <DoubleInput>
        <InputBox>
          <CustomTextField
            label="Name"
            name="firstname"
            placeholder="First name"
            register={register}
            errors={errors}
          />
        </InputBox>

        <InputBox>
          <CustomTextField
            name="lastname"
            placeholder="Last name"
            register={register}
            errors={errors}
          />
        </InputBox>
      </DoubleInput>

      <CustomTextField
        label="Email"
        placeholder="Email"
        register={register}
        name="address"
        errors={errors}
      />

      <CustomButton label="Continue" />
    </Form>
  );
};
