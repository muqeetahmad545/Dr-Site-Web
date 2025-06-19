// store.ts
import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice";
import { doctorApi } from "../features/api/doctor/doctorApi";
import { appointmentApi } from "../features/api/appointment/appointmentApi";
import { patientApi } from "../features/api/patient/patientApi";
import { paymentApi } from "../features/api/payment/paymentApi";
// import authReducer from "./authSlice";

export const store = configureStore({
  reducer: {
    // auth: authReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    [doctorApi.reducerPath]: doctorApi.reducer,
    [appointmentApi.reducerPath]: appointmentApi.reducer,
    [paymentApi.reducerPath]: paymentApi.reducer,
    [patientApi.reducerPath]: patientApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(apiSlice.middleware)
      .concat(appointmentApi.middleware)
      .concat(doctorApi.middleware)
      .concat(paymentApi.middleware)
      .concat(patientApi.middleware),
});
