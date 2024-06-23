import { configureStore } from "@reduxjs/toolkit";
import companyProccessReducer from "./features/companyProcessSlice";
import { companyApi } from "./services/companyApi";
import { setupListeners } from "@reduxjs/toolkit/query";

// LocalStorage
import { localStorageMiddleware } from "./local-storage/localStorageMiddleware";
import { loadState } from "./local-storage/loadState";

const statePreLoaded = loadState();

export const store: any = configureStore({
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
