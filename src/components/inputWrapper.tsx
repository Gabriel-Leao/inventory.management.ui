import { forwardRef, InputHTMLAttributes } from 'react'

type InputWrapperProps = {
  label: string
  htmlFor: string
  error?: string
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'className' | 'id'>

export const InputWrapper = forwardRef<HTMLInputElement, InputWrapperProps>(
  ({ label, htmlFor, error, ...props }, ref) => {
    return (
      <div className='mb-4'>
        <label
          htmlFor={htmlFor}
          className='mb-1 block text-sm font-medium text-gray-700'>
          {label}
        </label>
        <input
          {...props}
          ref={ref}
          id={htmlFor}
          className={`block w-full rounded-md border-2 p-2 transition-colors outline-none focus:border-blue-500 ${
            error ? 'border-red-400 bg-red-50' : 'border-gray-300'
          }`}
        />
        {error && <p className='mt-1 text-xs text-red-500'>{error}</p>}
      </div>
    )
  },
)

InputWrapper.displayName = 'InputWrapper'
