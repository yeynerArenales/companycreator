import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const companyApi: any = createApi({
  reducerPath: "companyAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.BASE_URL,
  }),
  endpoints: (builder) => ({
    postCompany: builder.mutation({
      query: (data) => ({
        url: "/company",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { usePostCompanyMutation } = companyApi;
