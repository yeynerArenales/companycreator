'use client'
import React, { useEffect } from 'react'

// Style
import styled from 'styled-components'

// Form
import { useForm, SubmitHandler } from 'react-hook-form'

// Components
import { CustomTextField } from '@/components/atoms/Inputs'
import { CustomButton } from '@/components/atoms/Buttons'

// validations
import { yupResolver } from '@hookform/resolvers/yup'
import { contactFormSchema } from './validate/schema'

// Redux
import { useDispatch } from 'react-redux'
import { setContactForm, setStep } from '@/redux/features/companyProcessSlice'
import { useAppSelector } from '@/redux/hooks'

const Form = styled.form`
  width: 410px;
  margin: 25px 0;
`

const DoubleInput = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const InputBox = styled.div`
  width: 45%;
  &:last-child {
    margin-top: 25px;
  }
`

export const ContactForm = ({}) => {
  const {
    contactForm: {
      fields: { name, lastName, email, phone }
    }
  } = useAppSelector((state ) => state.companyProccessReducer)
  const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    criteriaMode: 'all',
    resolver: yupResolver(contactFormSchema),
    defaultValues: {
      name,
      email,
      phone
    }
  })

  useEffect(() => {
    dispatch(
      setContactForm({
        error: true
      })
    )
  }, [errors])

  const onSubmit: SubmitHandler<any> = (fields) => {
    dispatch(
      setContactForm({
        fields
      })
    )
    dispatch(setStep(3))
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <DoubleInput>
        <InputBox>
          <CustomTextField
            label='Name'
            name='name'
            placeholder='First name'
            register={register}
            errors={errors}
          />
        </InputBox>

        <InputBox>
          <CustomTextField
            name='lastName'
            placeholder='Last name'
            register={register}
            errors={errors}
          />
        </InputBox>
      </DoubleInput>

      <CustomTextField
        label='Email'
        placeholder='Email'
        register={register}
        name='email'
        errors={errors}
      />

      <CustomTextField
        label='Phone'
        placeholder='(555) 000-0000'
        register={register}
        name='phone'
        errors={errors}
      />

      <CustomButton label='Continue' />
    </Form>
  )
}
