import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../../../util/baseAPi";
import type { Appointment } from "../../../types/appointment";

interface PatientResponse {
  success: boolean;
  message: string;
}

export const patientApi = createApi({
  reducerPath: "patientApi",
  baseQuery,
  endpoints: (builder) => ({
    validatePatient: builder.mutation<PatientResponse, Appointment>({
      query: (body) => ({
        url: "/patient/validate-patient",
        method: "POST",
        body,
      }),
    }),
  }),
});

// Correct way to export the hook
export const { useValidatePatientMutation } = patientApi;
