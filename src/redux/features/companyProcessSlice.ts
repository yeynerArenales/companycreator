import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  step: 1,
  status: "empty",
  apiMessage: "",
  businessForm: {
    fields: {
      name: "",
      type: "",
      address: "",
      optionalAddress: "",
      city: "",
      state: "",
      zip: "",
    },
    error: true,
  },
  contactForm: {
    fields: {
      name: "",
      lastName: "",
      email: "",
      phone: "",
    },
    error: true,
  },
};

export const companyProcessSlice = createSlice({
  name: "companyFormProcess",
  initialState,
  reducers: {
    setStep: (state, action) => {
      state.step = action.payload;
    },
    setBussinesForm: (state, action) => {
      state.businessForm = {
        ...state.businessForm,
        ...action.payload,
      };
    },
    setContactForm: (state, action) => {
      state.contactForm = {
        ...state.contactForm,
        ...action.payload,
      };
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setApiMessage: (state, action) => {
      state.apiMessage = action.payload;
    },
    setInitialState: () => initialState,
  },
});

export const {
  setStep,
  setBussinesForm,
  setContactForm,
  setStatus,
  setInitialState,
  setApiMessage,
} = companyProcessSlice.actions;

export default companyProcessSlice.reducer;
