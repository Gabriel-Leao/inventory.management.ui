import { DataGridSkeleton } from './dataGridSekeleton'

export const UsersSkeleton = () => {
  return (
    <div className='flex flex-col'>
      <div className='h-6 w-16 animate-pulse rounded bg-gray-200' />
      <DataGridSkeleton cols={3} />
    </div>
  )
}
