import { API_BASE_URL } from '@/lib/utils/env'
import { DashboardMetrics } from '@/types/dashboard'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  reducerPath: 'api',
  tagTypes: ['DashboardMetrics'],
  endpoints: (build) => ({
    getDashboardMetrics: build.query<DashboardMetrics, void>({
      query: () => '/dashboard',
      providesTags: ['DashboardMetrics'],
    }),
  }),
})

export const { useGetDashboardMetricsQuery } = api
