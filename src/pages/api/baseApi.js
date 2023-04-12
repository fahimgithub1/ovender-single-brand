
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiBaseSlices = createApi({
  reducerPath: "Api",
  endpoints: () => ({}),
  tagTypes: [],
  baseQuery: fetchBaseQuery({ 
    baseUrl: "https://ovendar.memocosmetica.com/",
    // credentials: "include"
  }),
});