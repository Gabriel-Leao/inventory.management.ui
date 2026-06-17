'use client'

import { LeftSide } from './leftSide'
import { RightSide } from './rightSide'

export const Navbar = () => {
  return (
    <div className='mb-7 flex w-full items-center justify-between'>
      <LeftSide />

      <RightSide />
    </div>
  )
}
