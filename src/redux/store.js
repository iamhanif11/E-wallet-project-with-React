import { configureStore } from "@reduxjs/toolkit";
import {
  persistCombineReducers,
  persistStore,
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/es/storage";
import authReducer from "./slices/authSlice";
import  env  from "../utils/environment";
import usersReducer from "./slices/usersSlice"

const persistConfig = {
  key: "e-wallet",
  storage,
  whitelist: ["auth"],
};

const persistedReducer = persistCombineReducers(persistConfig, {
  auth: authReducer,
  users: usersReducer,
  devTools: true,
});

export const store = configureStore({
  reducer: persistedReducer,
  devTools: env.environment === "development",
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE],
      },
    });
  },
});

export const persistor = persistStore(store)