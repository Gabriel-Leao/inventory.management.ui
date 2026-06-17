import useSidebar from '@/hooks/useSidebar'
import { Bell, Menu } from 'lucide-react'

export const LeftSide = () => {
  const { toggleSidebar } = useSidebar()

  return (
    <div className='flex items-center justify-between gap-5'>
      <button
        className='rounded-full bg-gray-100 p-3 hover:bg-blue-100'
        onClick={toggleSidebar}>
        <Menu className='h-4 w-4' />
      </button>
      <div className='relative'>
        <input
          type='search'
          placeholder='Start type to search groups & products'
          className='w-50 rounded-lg border-2 border-gray-300 bg-white py-2 pr-4 pl-10 focus:border-blue-500 active:outline-none md:w-60'
          name='search'
        />

        <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
          <Bell
            className='text-gray-500'
            size={20}
          />
        </div>
      </div>
    </div>
  )
}
