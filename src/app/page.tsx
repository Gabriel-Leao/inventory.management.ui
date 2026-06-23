'use client'

import { SalesSummaryCard } from '@/components/dashboard/salesSummaryCard'
import { PopularProductsWrapper } from '@/components/dashboard/popularProducts/wrapper'
import { useGetDashboardMetricsQuery } from '@/state/api/dashboard'
import { PurchasedSummaryCard } from '@/components/dashboard/purchasedSummaryCard'
import { ExpenseSummaryCard } from '@/components/dashboard/expenseSummaryCard'
import { StatCard } from '@/components/dashboard/statCard'
import { CheckCircle, Package, Tag, TrendingDown, TrendingUp } from 'lucide-react'

export default function Home() {
  const { data: dashBoardMetrics, isLoading, isError } = useGetDashboardMetricsQuery()

  if (isLoading) {
    return <div className='m-5'>loading...</div>
  }

  if (isError) {
    return <div className='m-5'>Failed to fetch data</div>
  }

  const products = dashBoardMetrics?.products || []
  const sales = dashBoardMetrics?.salesSummary || []
  const purchases = dashBoardMetrics?.purchaseSummary || []
  const expenseByCategorySummary = dashBoardMetrics?.expenseByCategorySummary || []
  const expenseSummary = dashBoardMetrics?.expenseSummary[0] || null

  return (
    <div className='grid grid-cols-1 gap-10 pb-4 md:grid-cols-2 md:grid-rows-[repeat(8,20vh)] xl:grid-cols-3 xl:grid-rows-[repeat(8,7.5vh)] xl:overflow-auto'>
      <PopularProductsWrapper products={products} />
      <SalesSummaryCard sales={sales} />
      <PurchasedSummaryCard purchases={purchases} />
      <ExpenseSummaryCard
        expenseByCategorySummary={expenseByCategorySummary}
        expenseSummary={expenseSummary}
      />
      <StatCard
        title='Customer & Expenses'
        primaryIcon={<Package className='h-6 w-6 text-blue-600' />}
        dateRange='22 - 29 October 2023'
        details={[
          {
            title: 'Customer Growth',
            amount: '175.00',
            changePercentage: 131,
            iconComponent: TrendingUp,
          },
          {
            title: 'Expenses',
            amount: '10.00',
            changePercentage: -56,
            iconComponent: TrendingDown,
          },
        ]}
      />
      <StatCard
        title='Dues & Pending Orders'
        primaryIcon={<CheckCircle className='h-6 w-6 text-blue-600' />}
        dateRange='22 - 29 October 2023'
        details={[
          {
            title: 'Dues',
            amount: '250.00',
            changePercentage: 131,
            iconComponent: TrendingUp,
          },
          {
            title: 'Pending Orders',
            amount: '147',
            changePercentage: -56,
            iconComponent: TrendingDown,
          },
        ]}
      />
      <StatCard
        title='Sales & Discount'
        primaryIcon={<Tag className='h-6 w-6 text-blue-600' />}
        dateRange='22 - 29 October 2023'
        details={[
          {
            title: 'Sales',
            amount: '1000.00',
            changePercentage: 20,
            iconComponent: TrendingUp,
          },
          {
            title: 'Discount',
            amount: '200.00',
            changePercentage: -10,
            iconComponent: TrendingDown,
          },
        ]}
      />
    </div>
  )
}
