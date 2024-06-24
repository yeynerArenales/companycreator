import { configureStore, Store } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

// Persist
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

// Slice
import rootReducer from "./features/companyProcessSlice";

// Api Service
import { companyApi } from "./services/companyApi";

const persistConfig = {
  key: "root",
  storage,
};

const companyProccessReducer = persistReducer(persistConfig, rootReducer);

export const store: Store = configureStore({
  reducer: {
    companyProccessReducer,
    [companyApi.reducerPath]: companyApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(companyApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
