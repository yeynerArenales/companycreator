import { configureStore } from "@reduxjs/toolkit";
import companyProccessReducer from './features/companyProcessSlice'
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    companyProccessReducer,
  },
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch