import { Product } from '@/types/dashboard'
import { PopularProductCard } from './card'

type PopularProductsWrapperProps = {
  products: Product[]
}

export const PopularProductsWrapper = ({ products }: PopularProductsWrapperProps) => {
  return (
    <section className='row-span-3 flex flex-col justify-between rounded-2xl bg-white shadow-md xl:row-span-6'>
      <div>
        <h2 className='px-7 py-5 text-lg font-semibold'>Popular Products</h2>
        <hr />
      </div>

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
