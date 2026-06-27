import { api } from '@/state/api'
import { ExpenseByCategorySummary } from '@/types/expense'

export const expenseApi = api.injectEndpoints({
  endpoints: (build) => ({
    getExpensesByCategory: build.query<ExpenseByCategorySummary[], void>({
      query: () => '/expenses',
      providesTags: ['Expenses'],
    }),
  }),
})

export const { useGetExpensesByCategoryQuery } = expenseApi
