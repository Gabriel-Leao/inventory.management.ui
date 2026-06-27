export type Expense = {
  id: string
  category: string
  amount: number
  timestamp: Date
}

export type ExpenseByCategorySummary = {
  expenseByCategorySummaryId: string
  category: string
  amount: string
  date: string
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
