import { cn } from '@/lib/utils/cn'
import { PurchaseSummary } from '@/types'
import { TrendingDown, TrendingUp } from 'lucide-react'
import numeral from 'numeral'
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

type PurchasedSummaryCardProps = {
  purchases: PurchaseSummary[]
}

export const PurchasedSummaryCard = ({ purchases }: PurchasedSummaryCardProps) => {
  const lastDataPoint = purchases[purchases.length - 1] || null

  return (
    <section className='col-span-1 row-span-2 flex flex-col justify-between rounded-2xl bg-white shadow-md md:col-span-2 xl:col-span-1 xl:row-span-3'>
      <div>
        <h2 className='px-7 py-5 text-lg font-semibold'>Purchase Summary</h2>
        <hr />
      </div>

      <>
        <div className='mt-7 mb-4 px-7'>
          <p className='text-sm text-gray-400'>Purchased</p>
          <div className='flex items-center'>
            <p className='text-2xl font-bold'>
              {lastDataPoint ? numeral(lastDataPoint.totalPurchased).format('$0.00a') : '0'}
            </p>
            {lastDataPoint && (
              <p
                className={cn(
                  'ml-3 flex text-sm text-red-500',
                  lastDataPoint.changePercentage! >= 0 && 'text-green-500',
                )}>
                {lastDataPoint.changePercentage! >= 0 ? (
                  <TrendingUp className='mr-2 h-5 w-5' />
                ) : (
                  <TrendingDown className='mr-2 h-5 w-5' />
                )}
                {Math.abs(lastDataPoint.changePercentage!)}%
              </p>
            )}
          </div>
          <ResponsiveContainer
            width='100%'
            height={200}
            className='p-2'>
            <AreaChart
              data={purchases}
              margin={{ top: 0, right: 0, left: -50, bottom: 45 }}>
              <XAxis
                dataKey='date'
                tick={false}
                axisLine={false}
              />
              <YAxis
                tick={false}
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
              <Area
                type='linear'
                dataKey='totalPurchased'
                stroke='#8884D8'
                fill='#8884D8'
                dot={true}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </>
    </section>
  )
}
