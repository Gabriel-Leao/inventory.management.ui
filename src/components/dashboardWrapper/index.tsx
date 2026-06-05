import type { ReactNode } from 'react'

import { Navbar } from '../navbar'

type DashboardWrapperProps = {
  children: ReactNode
}

export const DashboardWrapper = ({ children }: DashboardWrapperProps) => {
  return (
    <div className='flex min-h-screen w-full bg-gray-50 text-gray-900'>
      Dashboard
      <main className='flex h-full w-full flex-col bg-gray-50 px-9 py-7 md:pl-24'>
        <Navbar />
        {children}
      </main>
    </div>
  )
}
