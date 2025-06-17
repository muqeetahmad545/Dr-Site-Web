import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../../../util/baseAPi";
import type { Appointment } from "../../../types/appointment";

interface BookAppointmentResponse {
  success: boolean;
  message: string;
  checkoutUrl: string;
}

export const appointmentApi = createApi({
  reducerPath: "appointmentApi",
  baseQuery,
  endpoints: (builder) => ({
    bookAppointment: builder.mutation<BookAppointmentResponse, Appointment>({
      query: (body) => ({
        url: "/appointment/book-appointment",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useBookAppointmentMutation } = appointmentApi;
