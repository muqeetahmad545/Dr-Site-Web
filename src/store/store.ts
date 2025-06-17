// store.ts
import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice";
import { doctorApi } from "../features/api/doctor/doctorApi";
import { appointmentApi } from "../features/api/appointment/appointmentApi";
// import authReducer from "./authSlice";

export const store = configureStore({
  reducer: {
    // auth: authReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    [doctorApi.reducerPath]: doctorApi.reducer,
    [appointmentApi.reducerPath]: appointmentApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(apiSlice.middleware)
      .concat(appointmentApi.middleware)
      .concat(doctorApi.middleware),
});
