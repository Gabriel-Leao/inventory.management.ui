export const ProductsSkeleton = () => {
  return (
    <div className='mx-auto w-full pb-5'>
      <div className='mb-6'>
        <div className='h-10 w-full animate-pulse rounded border-2 border-gray-200 bg-gray-100' />
      </div>

      <div className='mb-6 flex items-center justify-between'>
        <div className='h-6 w-24 animate-pulse rounded bg-gray-200' />
        <div className='h-9 w-36 animate-pulse rounded bg-gray-200' />
      </div>

      <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3'>
        {Array.from({ length: 9 }).map((_, i) => (
          <div
            key={i}
            className='animate-pulse rounded-lg border border-gray-200 p-4 shadow'>
            <div className='mx-auto mb-3 h-16 w-16 rounded bg-gray-200' />
            <div className='mx-auto mb-2 h-4 w-3/4 rounded bg-gray-200' />
            <div className='mx-auto mb-1 h-4 w-1/3 rounded bg-gray-200' />
            <div className='mx-auto mb-3 h-3 w-1/2 rounded bg-gray-200' />
            <div className='mx-auto flex justify-center gap-1'>
              {Array.from({ length: 5 }).map((_, j) => (
                <div
                  key={j}
                  className='h-4 w-4 rounded bg-gray-200'
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
