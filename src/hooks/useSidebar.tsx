import { useAppDispatch, useAppSelector } from '@/redux'
import { setIsSidebarCollapsed } from '@/state'

const useSidebar = () => {
  const dispatch = useAppDispatch()
  const isSidebarCollapsed = useAppSelector((state) => state.global.isSidebarCollapsed)

  const toggleSidebar = () => {
    dispatch(setIsSidebarCollapsed(!isSidebarCollapsed))
  }

  const sidebarClassNames = `fixed flex flex-col ${isSidebarCollapsed ? 'w-0 md:w-16' : 'w-72 md:w-64'} bg-white transition-all overfloe-hidden duration-300 h-full shadow-md z-40`

  return {
    isSidebarCollapsed,
    toggleSidebar,
    sidebarClassNames,
  }
}

export default useSidebar
