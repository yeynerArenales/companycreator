'use client'
import React from 'react'

// Components
import { Wrapper, Select, Option, Label } from "./styles";

// Form
import { Controller,Control, DeepMap, FieldError } from 'react-hook-form'

// Errors
import { InputErrors } from './InputErrors'

interface CustomSelectProps {
  label?: string
  options: string[]
  control: Control
  name: string
  placeholder: string
  errors: DeepMap<any,FieldError>
}

export const CustomSelect: React.FC<CustomSelectProps> = ({
  label = null,
  options,
  control,
  name,
  errors,
  placeholder
}) => {
  return (
    <Wrapper>
      {label && <Label>{label}</Label>}
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <Select {...field}>
            <Option value='' disabled>
              {placeholder}
            </Option>
            {options.map((option) => (
              <Option key={option} value={option}>
                {option}
              </Option>
            ))}
          </Select>
        )}
      />
      {errors[name] && <InputErrors message={errors[name].message} />}
    </Wrapper>
  )
}
