'use client'

import { SalesSummaryCard } from '@/components/dashboard/salesSummaryCard'
import { PopularProductsWrapper } from '@/components/dashboard/popularProducts/wrapper'
import { useGetDashboardMetricsQuery } from '@/state/api/dashboard'
import { PurchaseSummaryCard } from '@/components/dashboard/purcahseSummaryCard'

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

  return (
    <div className='grid grid-cols-1 gap-10 pb-4 md:grid-cols-2 md:grid-rows-[repeat(8,20vh)] xl:grid-cols-3 xl:grid-rows-[repeat(8,7.5vh)] xl:overflow-auto'>
      <PopularProductsWrapper products={products} />
      <SalesSummaryCard sales={sales} />
      <PurchaseSummaryCard purchases={purchases} />
      <div className='row-span-3 bg-gray-500'></div>
      <div className='bg-gray-500 md:row-span-1 xl:row-span-2'></div>
      <div className='bg-gray-500 md:row-span-1 xl:row-span-2'></div>
      <div className='bg-gray-500 md:row-span-1 xl:row-span-2'></div>
    </div>
  )
}
