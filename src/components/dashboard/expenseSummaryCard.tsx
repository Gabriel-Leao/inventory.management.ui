import { ExpenseByCategory, ExpenseSummary } from '@/types/dashboard'
import { TrendingUp } from 'lucide-react'
import { Cell, Pie, PieChart, PieSectorShapeProps, ResponsiveContainer, Sector } from 'recharts'

const colors = ['#00C49F', '#0088FE', '#FFBB28']

type ExpenseSummaryCardProps = {
  expenseByCategorySummary: ExpenseByCategory[]
  expenseSummary: ExpenseSummary | null
}

type ExpenseSums = {
  [category: string]: number
}

const MyPieSlice = (props: PieSectorShapeProps) => (
  <Sector
    {...props}
    fill={colors[props.index % colors.length]}
  />
)

export const ExpenseSummaryCard = ({
  expenseByCategorySummary,
  expenseSummary,
}: ExpenseSummaryCardProps) => {
  if (!expenseSummary) return

  const expenseSums = expenseByCategorySummary.reduce(
    (acc: ExpenseSums, item: ExpenseByCategory) => {
      const category = item.category + ' Expenses'
      const amount = parseInt(item.amount, 10)
      if (!acc[category]) acc[category] = 0
      acc[category] += amount
      return acc
    },
    {},
  )

  const expenseCategories = Object.entries(expenseSums).map(([name, value]) => ({ name, value }))

  const totalExpenses = expenseByCategorySummary.reduce(
    (acc, category) => acc + parseInt(category.amount, 10),
    0,
  )
  const formattedTotalExpenses = totalExpenses.toFixed(2)

  return (
    <section className='row-span-3 flex flex-col justify-between rounded-2xl bg-white shadow-md'>
      <div>
        <h2 className='px-7 py-5 text-lg font-semibold'>Expense Summary</h2>
        <hr />
      </div>
      <div className='justify-between pr-7 xl:flex'>
        <div className='relative basis-3/5'>
          <ResponsiveContainer
            width='100%'
            height={140}>
            <PieChart>
              <Pie
                fill='#8884D8'
                data={expenseCategories}
                innerRadius={50}
                outerRadius={60}
                dataKey='value'
                nameKey='name'
                cx='50%'
                cy='50%'
                shape={MyPieSlice}
              />
            </PieChart>
            <div className='absolute top-1/2 left-1/2 basis-2/5 -translate-x-1/2 -translate-y-1/2 transform text-center'>
              <span className='text-xl font-bold'>${formattedTotalExpenses}</span>
            </div>
          </ResponsiveContainer>
        </div>
        <ul className='flex flex-col items-center justify-around gap-3 py-5 xl:items-start'>
          {expenseCategories.map((expense, index) => (
            <li
              key={`legend-${index}`}
              className='flex items-center text-xs'>
              <span
                className='mr-2 h-3 w-3 rounded-full'
                style={{ backgroundColor: colors[index % colors.length] }}
              />
              {expense.name}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <hr />
        {expenseSummary && (
          <div className='mt-3 mb-4 flex items-center justify-between px-7'>
            <div className='pt-2'>
              <p className='text-sm'>
                Average:{' '}
                <span className='font-semibold'>${expenseSummary.totalExpenses.toFixed(2)}</span>
              </p>
            </div>
            <span className='mt-2 flex items-center'>
              <TrendingUp className='mr-2 text-green-500' />
              30%
            </span>
          </div>
        )}
      </div>
    </section>
  )
}
