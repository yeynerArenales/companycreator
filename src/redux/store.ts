import { configureStore, Store } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

// Slice
import companyProccessReducer from "./features/companyProcessSlice";

// Api Service
import { companyApi } from "./services/companyApi";

// LocalStorage
import { localStorageMiddleware } from "./local-storage/localStorageMiddleware";

export const store: Store = configureStore({
  reducer: {
    companyProccessReducer,
    [companyApi.reducerPath]: companyApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      localStorageMiddleware,
      companyApi.middleware
    ),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
