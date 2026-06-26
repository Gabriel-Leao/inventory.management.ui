import { InputWrapper } from '@/components/inputWrapper'
import { Title } from '@/components/title'
import { ProductFormData } from '@/types/product'
import { ChangeEvent, type SubmitEvent, useState } from 'react'

type CreateProductModal = {
  isOpen: boolean
  onClose: () => void
  onCreate: (data: ProductFormData) => void
}

export const CreateProductModal = ({ isOpen, onClose, onCreate }: CreateProductModal) => {
  const [formData, setFormData] = useState({ name: '', price: 0, stockQuantity: 0, rating: 0 })

  if (!isOpen) return

  const handleResetForm = () => {
    setFormData({ name: '', price: 0, stockQuantity: 0, rating: 0 })
  }

  const handleOnSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    onCreate(formData)
    handleResetForm()
    handleCloseModal()
  }

  const handleCloseModal = () => {
    handleResetForm()
    onClose()
  }

  const handleFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setFormData({
      ...formData,
      [name]: name !== 'name' ? parseFloat(value) : value,
    })
  }

  return (
    <div className='bg-o bg-opacity fixed inset-0 z-40 h-full w-full overflow-y-auto bg-gray-600/50'>
      <div className='relative top-20 mx-auto w-96 rounded-md border bg-white p-5 shadow-lg'>
        <Title name='Create new product' />
        <form
          onSubmit={(e) => handleOnSubmit(e)}
          className='mt-5'>
          <InputWrapper
            type='text'
            placeholder='Name'
            name='name'
            onChange={(e) => handleFormChange(e)}
            value={formData.name}
            required
            label='Product Name'
            htmlFor='productName'
          />

          <InputWrapper
            type='number'
            placeholder='Price'
            name='price'
            onChange={(e) => handleFormChange(e)}
            value={formData.price}
            required
            label='Product Price'
            htmlFor='productPrice'
          />

          <InputWrapper
            type='number'
            placeholder='Stock quantity'
            name='stockQuantity'
            onChange={(e) => handleFormChange(e)}
            value={formData.stockQuantity}
            required
            label='Product Stock Quantity'
            htmlFor='productstockQuantity'
          />

          <InputWrapper
            type='number'
            placeholder='Rating'
            name='rating'
            onChange={(e) => handleFormChange(e)}
            value={formData.rating}
            required
            label='Product Rating'
            htmlFor='productRating'
          />

          <button
            type='submit'
            className='mt-4 cursor-pointer rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700'>
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
