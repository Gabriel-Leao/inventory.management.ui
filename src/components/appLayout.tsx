'use client'
import { type ReactNode } from 'react'
import { Navbar } from '@/components/navbar'
import { Sidebar } from '@/components/sidebar'
import { cn } from '@/lib/utils/cn'
import useSidebar from '@/hooks/useSidebar'

type AppLayoutProps = {
  children: ReactNode
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  const { isSidebarCollapsed } = useSidebar()

  return (
    <div className='flex min-h-screen w-full bg-gray-50 text-gray-900'>
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
