import { Product } from './product'

export type User = {
  id: string
  name: string
  email: string
  createdAt: Date
  updatedAt: Date
}

export type DashboardMetrics = {
  products: Product[]
  salesSummary: SaleSummary[]
  purchaseSummary: PurchaseSummary[]
  expenseSummary: ExpenseSummary[]
  expenseByCategorySummary: ExpenseByCategory[]
}

export type Sale = {
  id: string
  timestamp: Date
  quantity: number
  unitPrice: number
  totalAmount: number
  productId: string
  product?: Product
}

export type Purchase = {
  id: string
  timestamp: Date
  quantity: number
  unitCost: number
  totalCost: number
  productId: string
  product?: Product
}

export type Expense = {
  id: string
  category: string
  amount: number
  timestamp: Date
}

export type SaleSummary = {
  id: string
  totalValue: number
  changePercentage?: number | null
  date: Date
}

export type PurchaseSummary = {
  id: string
  totalPurchased: number
  changePercentage?: number | null
  date: Date
}

export type ExpenseSummary = {
  id: string
  totalExpenses: number
  date: Date
  expenseByCategory?: ExpenseByCategory[]
}

export type ExpenseByCategory = {
  id: string
  category: string
  amount: string
  date: Date
  expenseSummaryId?: string | null
  expenseSummary?: ExpenseSummary | null
}
