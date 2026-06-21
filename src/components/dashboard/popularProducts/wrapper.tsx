import { Product } from '@/types/dashboard'
import { PopularProductCard } from './card'

type PopularProductsWrapperProps = {
  products: Product[]
}

export const PopularProductsWrapper = ({ products }: PopularProductsWrapperProps) => {
  return (
    <section className='row-span-3 rounded-2xl bg-white pb-16 shadow-md xl:row-span-6'>
      <h3 className='px-7 pt-5 pb-2 text-lg font-semibold'>Popular Products</h3>
      <hr className='text-[#EFEFEF]' />

      <div className='h-full scrollbar-none overflow-auto'>
        {products.map((product, i) => (
          <PopularProductCard
            key={product.id}
            product={product}
            showBorderBottom={i !== products.length - 1}
          />
        ))}
      </div>
    </section>
  )
}
