import { describe, expect, it } from 'vitest'
import { productSchema } from '@/types/product'

describe('productSchema', () => {
  describe('name', () => {
    it('accepts a valid name', () => {
      const result = productSchema.safeParse({ name: 'Rose Bush', price: 10, stockQuantity: 5 })
      expect(result.success).toBe(true)
    })

    it('rejects name shorter than 3 characters', () => {
      const result = productSchema.safeParse({ name: 'AB', price: 10, stockQuantity: 5 })
      expect(result.success).toBe(false)
      expect(result.error?.issues[0].message).toBe(
        'Product name should have a length between 3 and 120 characters',
      )
    })

    it('rejects name longer than 120 characters', () => {
      const result = productSchema.safeParse({ name: 'A'.repeat(121), price: 10, stockQuantity: 5 })
      expect(result.success).toBe(false)
      expect(result.error?.issues[0].message).toBe(
        'Product name should have a length between 3 and 120 characters',
      )
    })

    it('accepts name with exactly 3 characters', () => {
      const result = productSchema.safeParse({ name: 'ABC', price: 10, stockQuantity: 5 })
      expect(result.success).toBe(true)
    })

    it('accepts name with exactly 120 characters', () => {
      const result = productSchema.safeParse({ name: 'A'.repeat(120), price: 10, stockQuantity: 5 })
      expect(result.success).toBe(true)
    })
  })

  describe('price', () => {
    it('accepts a valid price', () => {
      const result = productSchema.safeParse({ name: 'Rose', price: 9.99, stockQuantity: 5 })
      expect(result.success).toBe(true)
    })

    it('accepts price of 0', () => {
      const result = productSchema.safeParse({ name: 'Rose', price: 0, stockQuantity: 5 })
      expect(result.success).toBe(true)
    })

    it('rejects negative price', () => {
      const result = productSchema.safeParse({ name: 'Rose', price: -1, stockQuantity: 5 })
      expect(result.success).toBe(false)
      expect(result.error?.issues[0].message).toBe(
        'Product price should be greater than or equal to 0',
      )
    })

    it('rejects price with more than 2 decimal places', () => {
      const result = productSchema.safeParse({ name: 'Rose', price: 9.999, stockQuantity: 5 })
      expect(result.success).toBe(false)
      expect(result.error?.issues[0].message).toBe(
        'Product price must be a valid number with at most 2 decimal places',
      )
    })

    it('accepts price with exactly 2 decimal places', () => {
      const result = productSchema.safeParse({ name: 'Rose', price: 9.99, stockQuantity: 5 })
      expect(result.success).toBe(true)
    })
  })

  describe('rating', () => {
    it('accepts a valid rating', () => {
      const result = productSchema.safeParse({
        name: 'Rose',
        price: 10,
        rating: 4.5,
        stockQuantity: 5,
      })
      expect(result.success).toBe(true)
    })

    it('accepts when rating is omitted', () => {
      const result = productSchema.safeParse({ name: 'Rose', price: 10, stockQuantity: 5 })
      expect(result.success).toBe(true)
    })

    it('rejects rating below 1', () => {
      const result = productSchema.safeParse({
        name: 'Rose',
        price: 10,
        rating: 0.5,
        stockQuantity: 5,
      })
      expect(result.success).toBe(false)
      expect(result.error?.issues[0].message).toBe(
        'Product rating should be more than or equal to 1',
      )
    })

    it('rejects rating above 5', () => {
      const result = productSchema.safeParse({
        name: 'Rose',
        price: 10,
        rating: 5.1,
        stockQuantity: 5,
      })
      expect(result.success).toBe(false)
      expect(result.error?.issues[0].message).toBe(
        'Product rating should be less than or equal to 5',
      )
    })

    it('rejects rating with more than 2 decimal places', () => {
      const result = productSchema.safeParse({
        name: 'Rose',
        price: 10,
        rating: 4.555,
        stockQuantity: 5,
      })
      expect(result.success).toBe(false)
      expect(result.error?.issues[0].message).toBe(
        'Product rating must be a valid number with at most 2 decimal places',
      )
    })

    it('accepts rating of exactly 1', () => {
      const result = productSchema.safeParse({
        name: 'Rose',
        price: 10,
        rating: 1,
        stockQuantity: 5,
      })
      expect(result.success).toBe(true)
    })

    it('accepts rating of exactly 5', () => {
      const result = productSchema.safeParse({
        name: 'Rose',
        price: 10,
        rating: 5,
        stockQuantity: 5,
      })
      expect(result.success).toBe(true)
    })
  })

  describe('stockQuantity', () => {
    it('accepts a valid stock quantity', () => {
      const result = productSchema.safeParse({ name: 'Rose', price: 10, stockQuantity: 100 })
      expect(result.success).toBe(true)
    })

    it('accepts stock quantity of 0', () => {
      const result = productSchema.safeParse({ name: 'Rose', price: 10, stockQuantity: 0 })
      expect(result.success).toBe(true)
    })

    it('rejects negative stock quantity', () => {
      const result = productSchema.safeParse({ name: 'Rose', price: 10, stockQuantity: -1 })
      expect(result.success).toBe(false)
      expect(result.error?.issues[0].message).toBe(
        'Product stock quantity should be greater than or equal to 0',
      )
    })

    it('rejects non-integer stock quantity', () => {
      const result = productSchema.safeParse({ name: 'Rose', price: 10, stockQuantity: 1.5 })
      expect(result.success).toBe(false)
      expect(result.error?.issues[0].message).toBe(
        'Product stock quantity should be an integer number',
      )
    })
  })
})
