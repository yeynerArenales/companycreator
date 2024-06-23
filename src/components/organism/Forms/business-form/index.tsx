"use client";

import React, { useEffect } from "react";

// Form
import { useForm, SubmitHandler } from "react-hook-form";

// Components
import { CustomSelect, CustomTextField } from "@/components/atoms/Inputs";
import { CustomButton } from "@/components/atoms/Buttons";
import { Form, InputBox, DoubleInput } from "../styles";

// validations
import { yupResolver } from "@hookform/resolvers/yup";
import { businessFormSchema } from "./validation/schema";

// Redux
import { useDispatch } from "react-redux";
import {
  setBussinesForm,
  setStep,
  setStatus,
} from "@/redux/features/companyProcessSlice";
import { useAppSelector } from "@/redux/hooks";

// Utils
import { businessTypes, states } from "@/utils/constants";

export const BusinessForm = ({}) => {
  const {
    businessForm: {
      fields: { name, type, address, optionalAddress, city, state, zip },
    },
  } = useAppSelector((state) => state.companyProccessReducer);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    criteriaMode: "all",
    resolver: yupResolver(businessFormSchema),
    defaultValues: {
      name,
      type,
      address,
      optionalAddress,
      city,
      state,
      zip,
    },
  });

  useEffect(() => {
    dispatch(
      setBussinesForm({
        error: true,
      })
    );
  }, [errors, dispatch]);

  const onSubmit: SubmitHandler<any> = (fields) => {
    dispatch(
      setBussinesForm({
        fields,
        error: false,
      })
    );
    dispatch(setStep(2));
    dispatch(setStatus("progress"));
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <CustomTextField
        label="Business Name"
        placeholder="Registered business name"
        register={register}
        name="name"
        errors={errors}
      />

      <CustomSelect
        label="Type"
        placeholder="Type of Business"
        options={businessTypes}
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
        name="optionalAddress"
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
            options={states.map((state) => state.name)}
            placeholder="State"
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
