import { InputWrapper } from '@/components/inputWrapper'
import { Title } from '@/components/title'
import { productSchema, ProductFormData } from '@/types/product'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

type CreateProductModalProps = {
  isOpen: boolean
  onClose: () => void
  onCreate: (data: ProductFormData) => void
}

export const CreateProductModal = ({ isOpen, onClose, onCreate }: CreateProductModalProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<ProductFormData>({
    resolver: zodResolver(productSchema),
    mode: 'onChange',
  })

  if (!isOpen) return null

  const handleCloseModal = () => {
    reset()
    onClose()
  }

  const onSubmit = (data: ProductFormData) => {
    onCreate(data)
    reset()
    handleCloseModal()
  }

  return (
    <div className='fixed inset-0 z-40 h-full w-full overflow-y-auto bg-gray-600/50'>
      <div className='relative top-20 mx-auto w-96 rounded-md border bg-white p-5 shadow-lg'>
        <Title name='Create new product' />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='mt-5'>
          <InputWrapper
            label='Product Name'
            htmlFor='productName'
            type='text'
            placeholder='Name'
            error={errors.name?.message}
            {...register('name')}
          />
          <InputWrapper
            label='Product Price'
            htmlFor='productPrice'
            type='number'
            placeholder='Price'
            step='0.01'
            error={errors.price?.message}
            {...register('price', { valueAsNumber: true })}
          />
          <InputWrapper
            label='Product Stock Quantity'
            htmlFor='productStockQuantity'
            type='number'
            placeholder='Stock quantity'
            error={errors.stockQuantity?.message}
            {...register('stockQuantity', { valueAsNumber: true })}
          />
          <InputWrapper
            label='Product Rating'
            htmlFor='productRating'
            type='number'
            placeholder='Rating (1-5)'
            step='0.01'
            error={errors.rating?.message}
            {...register('rating', { valueAsNumber: true })}
          />
          <button
            type='submit'
            disabled={!isValid}
            className='mt-4 cursor-pointer rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50'>
            Create
          </button>
          <button
            type='button'
            className='ml-2 cursor-pointer rounded bg-gray-500 px-4 py-2 text-white hover:bg-gray-700'
            onClick={handleCloseModal}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  )
}
