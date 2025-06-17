// apiSlice.ts
import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../util/baseAPi";
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery,
  endpoints: () => ({}),
});
