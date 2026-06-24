import { DashboardMetrics } from '@/types/dashboard'
import { api } from '@/state/api'

export const dashboardApi = api.injectEndpoints({
  endpoints: (build) => ({
    getDashboardMetrics: build.query<DashboardMetrics, void>({
      query: () => '/dashboard',
      providesTags: ['DashboardMetrics'],
    }),
  }),
})

export const { useGetDashboardMetricsQuery } = dashboardApi
