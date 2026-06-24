import { Product, NewProduct } from '@/types/product'
import { api } from '@/state/api'

export const productApi = api.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query<Product[], string | void>({
      query: (search) => ({
        url: '/products',
        params: search ? { search } : {},
      }),
      providesTags: ['Products'],
    }),

    createProduct: build.mutation<Product, NewProduct>({
      query: (newProduct) => ({
        url: '/products',
        method: 'POST',
        body: newProduct,
      }),
      invalidatesTags: ['Products'],
    }),
  }),
})

export const { useGetProductsQuery, useCreateProductMutation } = productApi
