import { InputHTMLAttributes } from 'react'

type InputWrapper = {
  label: string
  htmlFor: string
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'className' | 'id'>

export const InputWrapper = ({ label, htmlFor, ...props }: InputWrapper) => {
  return (
    <>
      <label
        htmlFor={htmlFor}
        className='block pb-2 text-sm font-medium text-gray-700'>
        {label}
      </label>
      <input
        {...props}
        id={htmlFor}
        className='mb-2 block w-full rounded-md border-2 border-gray-500 p-2'
      />
    </>
  )
}
