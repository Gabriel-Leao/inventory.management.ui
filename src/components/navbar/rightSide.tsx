import useDarkMode from '@/hooks/useDarkMode'
import { Bell, Moon, Settings, Sun } from 'lucide-react'
import Link from 'next/link'

export const RightSide = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode()

  return (
    <div className='flex items-center justify-between gap-5'>
      <div className='hidden items-center justify-between md:flex'>
        <div>
          <button onClick={toggleDarkMode}>
            {isDarkMode ? (
              <Sun
                className='cursor-pointer text-gray-500'
                size={24}
              />
            ) : (
              <Moon
                className='cursor-pointer text-gray-500'
                size={24}
              />
            )}
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
          <span className='font-semibold'>Gabriel</span>
        </div>
      </div>
      <Link href='/settings'>
        <Settings
          className='cursor-pointer text-gray-500'
          size={24}
        />
      </Link>
    </div>
  )
}
