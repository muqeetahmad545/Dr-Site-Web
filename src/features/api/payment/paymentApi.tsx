import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../../../util/baseAPi";

interface PaymentResponse {
  success: boolean;
  message: string;
  error: string;
  data: {
    clientSecret: string;
  };
}

export const paymentApi = createApi({
  reducerPath: "paymentApi",
  baseQuery,
  endpoints: (builder) => ({
    paymentIntent: builder.mutation<PaymentResponse, void>({
      query: () => ({
        url: "/payment/create-payment-intent",
        method: "GET",
      }),
    }),
  }),
});

export const { usePaymentIntentMutation } = paymentApi;
