"use client";
import React, { useEffect } from "react";

// Form
import { useForm, SubmitHandler } from "react-hook-form";

// Components
import { CustomPhoneInput, CustomTextField } from "@/components/atoms/Inputs";
import { CustomButton } from "@/components/atoms/Buttons";
import { Form, InputBox, DoubleInput } from "../styles";

// validations
import { yupResolver } from "@hookform/resolvers/yup";
import { contactFormSchema } from "./validate/schema";

// Redux
import { useDispatch } from "react-redux";
import { setContactForm, setStep } from "@/redux/features/companyProcessSlice";

// Hooks
import { useGetState } from "@/hooks";

export const ContactForm = ({}) => {
  const {
    contactForm: { firstName, lastName, email, phone },
  } = useGetState();
  const dispatch = useDispatch();

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    criteriaMode: "all",
    resolver: yupResolver(contactFormSchema),
    defaultValues: {
      name: firstName,
      lastName,
      email,
      phone,
    },
  });

  useEffect(() => {
    dispatch(
      setContactForm({
        error: true,
      })
    );
  }, [errors]);

  const onSubmit: SubmitHandler<any> = (fields) => {
    dispatch(
      setContactForm({
        fields,
        error: false,
      })
    );
    dispatch(setStep(3));
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <DoubleInput>
        <InputBox>
          <CustomTextField
            label="Name"
            name="name"
            placeholder="First name"
            register={register}
            errors={errors}
          />
        </InputBox>

        <InputBox $address={true}>
          <CustomTextField
            name="lastName"
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
        name="email"
        errors={errors}
      />

      <CustomPhoneInput
        label="Phone"
        placeholder="(555) 000-0000"
        control={control}
        name="phone"
        errors={errors}
      />

      <CustomButton label="Continue" />
    </Form>
  );
};
