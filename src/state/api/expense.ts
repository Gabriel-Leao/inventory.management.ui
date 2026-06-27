import { api } from '@/state/api'
import { ExpenseByCategory } from '@/types/expense'

export const expenseApi = api.injectEndpoints({
  endpoints: (build) => ({
    getExpensesByCategory: build.query<ExpenseByCategory, void>({
      query: () => '/expenses',
      providesTags: ['Expenses'],
    }),
  }),
})

export const { useGetExpensesByCategoryQuery } = expenseApi
