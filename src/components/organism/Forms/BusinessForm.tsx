"use client";
import React from "react";

// Style
import styled from "styled-components";

// Form
import { useForm, SubmitHandler } from "react-hook-form";

// Components
import { CustomSelect, CustomTextField } from "@/components/atoms/Inputs";
import { CustomButton } from "@/components/atoms/Buttons";

// validations
import { yupResolver } from "@hookform/resolvers/yup";
import { businessFormSchema } from "./validations";

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

export const BusinessForm = ({}) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    criteriaMode: "all",
    resolver: yupResolver(businessFormSchema),
  });

  const onSubmit: SubmitHandler<any> = (data) => console.log(data);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <CustomTextField
        label="Business Name"
        placeholder="Registered business name"
        register={register}
        name="businessName"
        errors={errors}
      />

      <CustomSelect
        label="Type"
        options={["1", "2", "3"]}
        control={control}
        name="type"
        errors={errors}
      />

      <CustomTextField
        label="Address"
        placeholder="Address line 1"
        register={register}
        name="address"
        errors={errors}
      />

      <CustomTextField
        placeholder="Address line 2 (Optional)"
        name="address_2"
        register={register}
        errors={errors}
      />

      <CustomTextField
        placeholder="City"
        name="city"
        register={register}
        errors={errors}
      />

      <DoubleInput>
        <InputBox>
          <CustomSelect
            options={["1", "2", "3"]}
            control={control}
            name="state"
            errors={errors}
          />
        </InputBox>

        <InputBox>
          <CustomTextField
            name="zip"
            placeholder="Zip"
            register={register}
            errors={errors}
            type="number"
          />
        </InputBox>
      </DoubleInput>

      <CustomButton label="Continue" />
    </Form>
  );
};
