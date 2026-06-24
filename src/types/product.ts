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
