import { cn } from '@/lib/utils/cn'
import { Product } from '@/types/product'
import { ShoppingBag } from 'lucide-react'
import { Rating } from '@/components/rating'
import Image from 'next/image'
import { getRandomProduct } from '@/lib/utils/getRandomProduct'

type PopularProductCardProps = {
  product: Product
  showBorderBottom: boolean
}

export const PopularProductCard = ({ product, showBorderBottom }: PopularProductCardProps) => {
  return (
    <div
      className={cn(
        'flex items-center justify-between gap-3 px-5 py-7',
        showBorderBottom && 'border-b',
      )}>
      <div className='flex items-center gap-3'>
        <Image
          src={getRandomProduct()}
          alt={product.name}
          width={48}
          height={48}
          className='h-14 w-14 rounded-lg bg-gray-100'
        />
        <div className='flex flex-col justify-between gap-1'>
          <p className='font-bold text-gray-700'>{product.name}</p>
          <p className='tex-sm flex items-center'>
            <span className='text-xs font-bold text-blue-500'>${product.price}</span>
            <span className='mx-2'>|</span>
            <Rating stars={product.rating || 0} />
          </p>
        </div>
      </div>

      <div className='flex items-center text-xs'>
        <button className='mr-2 rounded-full bg-blue-100 p-2 text-blue-600'>
          <ShoppingBag className='h-4 w-4' />
        </button>
        {Math.round(product.stockQuantity / 1000)}k Sold
      </div>
    </div>
  )
}
