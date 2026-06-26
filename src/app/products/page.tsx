'use client'

import { ChangeEvent, useState } from 'react'
import { Title } from '@/components/title'
import { useCreateProductMutation, useGetProductsQuery } from '@/state/api/product'
import { PlusCircleIcon, SearchIcon } from 'lucide-react'
import { ProductCard } from '@/app/products/_components/productCard'
import { CreateProductModal } from '@/app/products/_components/createProductModal'
import { ProductFormData } from '@/types/product'

export default function Products() {
  const [searchTerm, setSearchTerm] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setSearchTerm(e.target.value)
  }

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen)
  }

  const { data: products, isLoading, isError } = useGetProductsQuery(searchTerm)
  const [createProduct] = useCreateProductMutation()

  const handleCreateProduct = async (productData: ProductFormData) => {
    await createProduct(productData)
  }

  if (isLoading) {
    return <div className='m-5'>loading...</div>
  }

  if (isError || !products) {
    return <div className='m-5'>Failed to fetch products</div>
  }

  return (
    <div className='mx-auto w-full pb-5'>
      <div className='mb-6'>
        <div className='flex items-center rounded border-2 border-gray-200'>
          <SearchIcon className='flex h-5 w-5 items-center pl-1 text-gray-500' />
          <input
            className='w-full rounded bg-white px-4 py-2'
            placeholder='Search products...'
            value={searchTerm}
            onChange={(e) => handleSearch(e)}
          />
        </div>
      </div>
      <div className='mb-6 flex items-center justify-between'>
        <Title name='Products' />
        <button
          className='flex cursor-pointer items-center rounded bg-blue-500 px-4 py-2 font-bold text-gray-200 hover:bg-blue-700'
          onClick={handleModalToggle}>
          <PlusCircleIcon className='mr-2 h-5 w-5 text-gray-200' /> Create product
        </button>
      </div>

      <div className='gridgrid-cols-1 grid justify-between gap-10 md:grid-cols-2 lg:grid-cols-3'>
        {products.length > 1 &&
          products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
      </div>

      <CreateProductModal
        isOpen={isModalOpen}
        onClose={handleModalToggle}
        onCreate={handleCreateProduct}
      />
    </div>
  )
}
