'use client'

import { Title } from '@/components/title'
import { useGetUsersQuery } from '@/state/api/user'
import { DataGrid, GridColDef } from '@mui/x-data-grid'

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 120 },
  { field: 'name', headerName: 'Name', width: 200 },
  { field: 'email', headerName: 'E-mail', width: 200 },
]

export default function Users() {
  const { data: users, isLoading, isError } = useGetUsersQuery()

  if (isLoading) {
    return <div className='m-5'>loading...</div>
  }

  if (isError || !users) {
    return <div className='m-5'>Failed to fetch products</div>
  }

  return (
    <div className='flex flex-col'>
      <Title name='Users' />
      <DataGrid
        rows={users}
        columns={columns}
        checkboxSelection
        className='mt-5 rounded-lg border border-gray-200 bg-white text-gray-700 shadow'
      />
    </div>
  )
}
