import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  step: 1,
  status: 'empty',
  businessForm: {
    fields: {
      name: '',
      type: '',
      address: '',
      optionalAddress: '',
      city: '',
      state: '',
      zip: ''
    },
    error: false
  },
  contactForm: {
    fields: {
      name: '',
      lastName: '',
      email: '',
      phone: ''
    },
    error: false
  }
}

export const companyProcessSlice = createSlice({
  name: 'companyFormProcess',
  initialState,
  reducers: {
    setStep: (state, action) => {
      state.step = action.payload
    },
    setBussinesForm: (state, action) => {
      state.businessForm = {
        ...state.businessForm,
        ...action.payload
      }
    },
    setContactForm: (state, action) => {
      state.contactForm = {
        ...state.contactForm,
        ...action.payload
      }
    },
  }
})

export const { setStep, setBussinesForm, setContactForm } = companyProcessSlice.actions

export default companyProcessSlice.reducer