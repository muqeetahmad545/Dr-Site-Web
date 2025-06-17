import { createApi } from "@reduxjs/toolkit/query/react";
import type { Doctor } from "../../../types/doctor";
import { baseQuery } from "../../../util/baseAPi";

interface GetDoctorsResponse {
  data: Doctor;
}

export const doctorApi = createApi({
  reducerPath: "doctorApi",
  baseQuery,
  endpoints: (builder) => ({
    getDoctors: builder.query<GetDoctorsResponse, void>({
      query: () => ({
        url: "/admin/doctors",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetDoctorsQuery } = doctorApi;
