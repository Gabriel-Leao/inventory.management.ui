import { API_BASE_URL } from '@/lib/utils/env'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
  }),
  tagTypes: ['DashboardMetrics', 'Products', 'Users', 'Expenses'],
  endpoints: () => ({}),
})
