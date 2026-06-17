import useSidebar from '@/hooks/useSidebar'
import { cn } from '@/lib/utils/cn'
import { Menu } from 'lucide-react'

export const Logo = () => {
  const { isSidebarCollapsed, toggleSidebar } = useSidebar()

  return (
    <div
      className={cn(
        'flex items-center justify-between gap-3 px-8 pt-8 md:justify-normal',
        isSidebarCollapsed && 'hidden px-5',
      )}>
      <div>logo</div>
      <h1 className={cn('text-2xl font-extrabold', isSidebarCollapsed && 'hidden')}>STOCK</h1>
      <button
        className='rounded-full bg-gray-100 p-3 hover:bg-blue-100 md:hidden'
        onClick={toggleSidebar}>
        <Menu className='h-4 w-4' />
      </button>
    </div>
  )
}
