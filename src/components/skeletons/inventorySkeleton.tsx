import { DataGridSkeleton } from './dataGridSekeleton'

export const InventorySkeleton = () => {
  return (
    <div className='flex flex-col'>
      <div className='h-6 w-24 animate-pulse rounded bg-gray-200' />
      <DataGridSkeleton cols={4} />
    </div>
  )
}
