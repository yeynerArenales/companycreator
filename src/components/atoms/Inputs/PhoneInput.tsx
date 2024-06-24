import { FC } from "react";

// Form
import { Controller } from "react-hook-form";

// Components
import { Wrapper, Label, PhoneInputStyled } from "./styles";

// React-phone-input-2 Library
import "react-phone-input-2/lib/material.css";

// i18n-iso-countries
import i18nIsoCountries from "i18n-iso-countries";
i18nIsoCountries.registerLocale(require("i18n-iso-countries/langs/en.json"));

// Constants
import { phonesTypes } from "@/utils/constants";

// Errors
import { InputErrors } from './InputErrors'

interface ICustomPhoneInput {
  label?: string;
  placeholder?: string;
  control: any;
  name: string;
  errors: any;
}

export const CustomPhoneInput: FC<ICustomPhoneInput> = ({
  label = null,
  placeholder,
  control,
  name,
  errors,
}): JSX.Element => {
  const getIso2FromCountryName = (countryName: string) => {
    const countryCode = i18nIsoCountries.getAlpha2Code(countryName, "en");
    return countryCode ? countryCode.toLowerCase() : "";
  };

  const allowedCountryCodes: string[] = phonesTypes?.map(({ name }) =>
    getIso2FromCountryName(name)
  );

  return (
    <Wrapper>
      {label && <Label>{label}</Label>}
      <Controller
        control={control}
        name={name}
        rules={{ required: true }}
        render={({ field: { ref, ...field } }) => (
          <PhoneInputStyled
            {...field}
            inputProps={{
              ref,
            }}
            onlyCountries={allowedCountryCodes}
            country={"us"}
            countryCodeEditable={false}
            placeholder={placeholder}
            isValid={!Boolean(errors[name])}
          />
        )}
      />
      {errors[name] && <InputErrors message={errors[name].message} />}
    </Wrapper>
  );
};
