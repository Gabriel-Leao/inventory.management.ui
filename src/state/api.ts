import { API_BASE_URL } from '@/lib/utils/env'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  reducerPath: 'api',
  tagTypes: [],
  endpoints: (build) => ({}),
})

export const {} = api
