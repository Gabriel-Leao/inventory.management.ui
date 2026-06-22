import { SaleSummary } from '@/types/dashboard'
import { TrendingUp } from 'lucide-react'
import { useState } from 'react'
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

export type SalesSummaryCardProps = {
  sales: SaleSummary[]
}

export const SalesSummaryCard = ({ sales }: SalesSummaryCardProps) => {
  const [timeframe, setTimeframe] = useState('weekly')

  const totalValueSum = sales.reduce((acc, curr) => acc + curr.totalValue, 0) || 0

  const averageChangePercentage =
    sales.reduce((acc, curr, _, array) => {
      return acc + curr.changePercentage! / array.length
    }, 0) || 0

  const highestValueData = sales.reduce((acc, curr) => {
    return acc.totalValue > curr.totalValue ? acc : curr
  }, sales[0] || {})

  const highestValueDate = highestValueData.date
    ? new Date(highestValueData.date).toLocaleDateString('en-US', {
        month: 'numeric',
        day: 'numeric',
        year: '2-digit',
      })
    : 'N/A'

  return (
    <section className='row-span-3 flex flex-col justify-between rounded-2xl bg-white shadow-md xl:row-span-6'>
      <div>
        <h2 className='px-7 py-5 text-lg font-semibold'>Sales Summary</h2>
        <hr />
      </div>

      <>
        <div className='mt-5 mb-6 flex items-center justify-between px-7'>
          <div className='text-lg font-medium'>
            <p className='text-xs text-gray-400'>Value</p>
            <span className='text-2xl font-extrabold'>
              $
              {(totalValueSum / 1000000).toLocaleString('en', {
                maximumFractionDigits: 2,
              })}
              m
            </span>
            <span className='ml-2 text-sm text-green-500'>
              <TrendingUp className='mr-1 inline h-4 w-4' />
              {averageChangePercentage.toFixed(2)}%
            </span>
          </div>
          <select
            className='rounded border border-gray-300 bg-white p-2 shadow-sm'
            value={timeframe}
            onChange={(e) => {
              setTimeframe(e.target.value)
            }}>
            <option value='daily'>Daily</option>
            <option value='weekly'>Weekly</option>
            <option value='monthly'>Monthly</option>
          </select>
        </div>

        <ResponsiveContainer
          width='100%'
          height={350}
          className='px-7'>
          <BarChart
            data={sales}
            margin={{ top: 0, right: 0, left: -25, bottom: 0 }}>
            <CartesianGrid
              strokeDasharray=''
              vertical={false}
            />
            <XAxis
              dataKey='date'
              tickFormatter={(value) => {
                const date = new Date(value)
                return `${date.getMonth() + 1}/${date.getDate()}`
              }}
            />
            <YAxis
              tickFormatter={(value) => {
                return `$${(value / 1000000).toFixed(0)}m`
              }}
              tick={{ fontSize: 12, dx: -1 }}
              tickLine={false}
              axisLine={false}
            />
            <Tooltip
              formatter={(value) => {
                const numericValue = typeof value === 'number' ? value : Number(value)
                return [`$${numericValue.toLocaleString('en')}`]
              }}
              labelFormatter={(label) => {
                const date = new Date(label)
                return date.toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })
              }}
            />
            <Bar
              dataKey='totalValue'
              fill='#3182ce'
              barSize={10}
              radius={[10, 10, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </>

      <>
        <hr />
        <div className='mt-6 mb-4 flex items-center justify-between px-7 text-sm'>
          <p>{sales.length || 0} days</p>
          <p className='text-sm'>
            Highest Sales Date: <span className='font-bold'>{highestValueDate}</span>
          </p>
        </div>
      </>
    </section>
  )
}
