import { api } from '@/state/api'
import { User } from '@/types'

export const userApi = api.injectEndpoints({
  endpoints: (build) => ({
    getUsers: build.query<User[], void>({
      query: () => '/users',
      providesTags: ['Users'],
    }),
  }),
})

export const { useGetUsersQuery } = userApi
