import { createSlice } from "@reduxjs/toolkit";

// localStorage
import { loadState } from "../local-storage/loadState";

const initialState = {
  step: 1,
  status: "empty",
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

const preloadSate = loadState() ? loadState() : initialState;
console.log({preloadSate})

export const companyProcessSlice = createSlice({
  name: "companyFormProcess",
  initialState: preloadSate,
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
    setInitialState: () => initialState,
  },
});

export const {
  setStep,
  setBussinesForm,
  setContactForm,
  setStatus,
  setInitialState,
} = companyProcessSlice.actions;

export default companyProcessSlice.reducer;
