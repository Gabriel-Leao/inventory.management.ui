'use client'

import { useEffect, type ReactNode } from 'react'

import { Navbar } from '@/components/navbar'
import { Sidebar } from '@/components/sidebar'
import { cn } from '@/lib/utils/cn'
import useSidebar from '@/hooks/useSidebar'
import useDarkMode from '@/hooks/useDarkMode'

type DashboardWrapperProps = {
  children: ReactNode
}

export const DashBoardLayout = ({ children }: DashboardWrapperProps) => {
  const { isSidebarCollapsed } = useSidebar()
  const { isDarkMode } = useDarkMode()

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.add('light')
    }
  }, [])

  return (
    <div className={cn('flex min-h-screen w-full bg-gray-50 text-gray-900', isDarkMode && 'dark')}>
      <Sidebar />
      <main
        className={cn(
          'flex h-full w-full flex-col bg-gray-50 px-9 py-7 md:pl-72',
          isSidebarCollapsed && 'md:pl-24',
        )}>
        <Navbar />
        {children}
      </main>
    </div>
  )
}
