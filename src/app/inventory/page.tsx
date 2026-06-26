'use client'

import { Title } from '@/components/title'
import { useGetProductsQuery } from '@/state/api/product'
import { DataGrid, GridColDef } from '@mui/x-data-grid'

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 120 },
  { field: 'name', headerName: 'Product Name', width: 200 },
  {
    field: 'price',
    headerName: 'Price',
    width: 110,
    type: 'number',
    valueGetter: (_, row) => `$${row.price}`,
  },
  {
    field: 'rating',
    headerName: 'Rating',
    width: 110,
    type: 'number',
    valueGetter: (_, row) => (row.rating ? row.rating : 'N/A'),
  },
  {
    field: 'stockQuantity',
    headerName: 'Stock Quantity',
    width: 150,
    type: 'number',
  },
]

export default function Inventory() {
  const { data: products, isLoading, isError } = useGetProductsQuery()

  if (isLoading) {
    return <div className='m-5'>loading...</div>
  }

  if (isError || !products) {
    return <div className='m-5'>Failed to fetch products</div>
  }

  return (
    <div className='flex flex-col'>
      <Title name='Inventory' />
      <DataGrid
        rows={products}
        columns={columns}
        checkboxSelection
        className='mt-5 rounded-lg border border-gray-200 bg-white text-gray-700 shadow'
      />
    </div>
  )
}
