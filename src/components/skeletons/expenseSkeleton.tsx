export const ExpenseSkeleton = () => {
  return (
    <>
      <div className='mb-5'>
        <div className='mb-2 h-6 w-24 animate-pulse rounded bg-gray-200' />
        <div className='h-3 w-64 animate-pulse rounded bg-gray-200' />
      </div>

      <div className='flex flex-col justify-between gap-4 md:flex-row'>
        <div className='w-full animate-pulse rounded-lg bg-white p-6 shadow md:w-1/3'>
          <div className='mb-4 h-5 w-48 rounded bg-gray-200' />
          <div className='space-y-4'>
            <div>
              <div className='mb-1 h-3 w-16 rounded bg-gray-200' />
              <div className='h-9 w-full rounded bg-gray-200' />
            </div>
            <div>
              <div className='mb-1 h-3 w-20 rounded bg-gray-200' />
              <div className='h-9 w-full rounded bg-gray-200' />
            </div>
            <div>
              <div className='mb-1 h-3 w-16 rounded bg-gray-200' />
              <div className='h-9 w-full rounded bg-gray-200' />
            </div>
          </div>
        </div>

        <div className='flex grow animate-pulse flex-col items-center justify-center rounded-lg bg-white p-4 shadow md:p-6'>
          <div className='mb-6 h-64 w-64 rounded-full bg-gray-200' />
          <div className='flex gap-6'>
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className='flex items-center gap-2'>
                <div className='h-3 w-3 rounded-full bg-gray-200' />
                <div className='h-3 w-16 rounded bg-gray-200' />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
