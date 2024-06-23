import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const companyApi: any = createApi({
  reducerPath: 'companyAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://ss-company.free.beeceptor.com'
  }),
  endpoints: (builder) => ({
    postCompany: builder.mutation({
      query: (data) => ({
        url: '/company',
        method: 'POST',
        body: data
      })
    })
  })
}) 

export const { usePostCompanyMutation } = companyApi
