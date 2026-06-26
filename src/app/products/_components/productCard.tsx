import { Rating } from '@/components/rating'
import { Product } from '@/types/product'

type ProductCardProps = {
  product: Product
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className='mx-auto w-full max-w-full rounded-md border p-4 shadow'>
      <div className='flex flex-col items-center'>
        img
        <h3>{product.name}</h3>
        <p className='text-gray-800'>{product.price.toFixed(2)}</p>
        <p className='tex-sm mt-1 text-gray-600'>Stock: {product.stockQuantity}</p>
        {product.rating && (
          <div className='mt-2 flex items-center'>
            <Rating stars={product.rating} />
          </div>
        )}
      </div>
    </div>
  )
}
