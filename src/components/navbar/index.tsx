'use client'

import Link from 'next/link'

import { Bell, Menu, Settings, Sun } from 'lucide-react'

export const Navbar = () => {
  return (
    <div className='b mb-7 flex w-full items-center justify-between'>
      <div className='flex items-center justify-between gap-5'>
        <button
          className='rounded-full bg-gray-100 p-3 hover:bg-blue-100'
          onClick={() => {}}>
          <Menu className='h-4 w-4' />
        </button>
        <div className='relative'>
          <input
            type='search'
            placeholder='Start type to search groups & products'
            className='w-50 rounded-lg border-2 border-gray-300 bg-white py-2 pr-4 pl-10 focus:border-blue-500 active:outline-none md:w-80'
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

      <div className='flex items-center justify-between gap-5'>
        <div className='hidden items-center justify-between md:flex'>
          <div>
            <button onClick={() => {}}>
              <Sun
                className='cursor-pointer text-gray-500'
                size={24}
              />
            </button>
          </div>
          <div className='relative'>
            <Bell
              className='cursor-pointer text-gray-500'
              size={24}
            />
            <span className='absolute -top-2 -right-2 inline-flex items-center justify-center rounded-full bg-red-400 px-[0.4rem] py-1 text-sm leading-none font-semibold text-red-100'>
              3
            </span>
          </div>
          <hr className='mx-3 h-7 w-0 border-l border-solid border-gray-300' />
          <div className='flex cursor-pointer items-center gap-3'>
            <div className='h-9 w-9'>image</div>
            <span className='font-semibold'>Gabe Lion</span>
          </div>
        </div>
        <Link href='/settings'>
          <Settings
            className='cursor-pointer text-gray-500'
            size={24}
          />
        </Link>
      </div>
    </div>
  )
}
