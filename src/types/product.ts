import { z } from 'zod'
import { Purchase, Sale } from './dashboard'

export type Product = {
  id: string
  name: string
  price: number
  rating?: number | null
  stockQuantity: number
  createdAt: Date
  updatedAt: Date
  sales?: Sale[]
  purchases?: Purchase[]
}

export type NewProduct = {
  name: string
  price: number
  rating?: number | null
  stockQuantity: number
}

const decimalPlaces = (max: number) => (val: number) => {
  const parts = val.toString().split('.')
  return !parts[1] || parts[1].length <= max
}

export const productSchema = z.object({
  name: z
    .string({ message: 'Product name should be a text' })
    .min(3, 'Product name should have a length between 3 and 120 characters')
    .max(120, 'Product name should have a length between 3 and 120 characters'),

  price: z
    .number({ message: 'Product price must be a valid number with at most 2 decimal places' })
    .min(0, 'Product price should be greater than or equal to 0')
    .refine(decimalPlaces(2), 'Product price must be a valid number with at most 2 decimal places'),

  rating: z
    .number()
    .min(1, 'Product rating should be more than or equal to 1')
    .max(5, 'Product rating should be less than or equal to 5')
    .refine(decimalPlaces(2), 'Product rating must be a valid number with at most 2 decimal places')
    .optional(),

  stockQuantity: z
    .number({ message: 'Product stock quantity should be an integer number' })
    .int('Product stock quantity should be an integer number')
    .min(0, 'Product stock quantity should be greater than or equal to 0'),
})

export type ProductFormData = z.infer<typeof productSchema>
