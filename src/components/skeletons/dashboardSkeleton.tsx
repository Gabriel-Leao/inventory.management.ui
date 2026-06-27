export const DashboardSkeleton = () => {
  return (
    <div className='grid grid-cols-1 gap-10 pb-4 md:grid-cols-2 md:grid-rows-[repeat(8,20vh)] xl:grid-cols-3 xl:grid-rows-[repeat(8,7.5vh)] xl:overflow-auto'>
      <div className='row-span-3 animate-pulse rounded-lg bg-white p-4 shadow md:row-span-4'>
        <div className='mb-4 h-5 w-36 rounded bg-gray-200' />
        <div className='flex flex-col gap-4'>
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className='flex items-center justify-between'>
              <div className='flex items-center gap-3'>
                <div className='h-10 w-10 rounded bg-gray-200' />
                <div className='flex flex-col gap-1'>
                  <div className='h-3 w-28 rounded bg-gray-200' />
                  <div className='h-3 w-16 rounded bg-gray-200' />
                </div>
              </div>
              <div className='h-6 w-16 rounded bg-gray-200' />
            </div>
          ))}
        </div>
      </div>

      <div className='row-span-3 animate-pulse rounded-lg bg-white p-4 shadow md:row-span-4'>
        <div className='mb-3 h-5 w-28 rounded bg-gray-200' />
        <div className='mb-4 flex items-end gap-3'>
          <div className='h-8 w-24 rounded bg-gray-200' />
          <div className='h-4 w-12 rounded bg-gray-200' />
        </div>
        <div className='flex h-40 items-end gap-2 xl:h-28'>
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className='flex-1 rounded-t bg-gray-200'
              style={{ height: `${40 + i * 12}%` }}
            />
          ))}
        </div>
        <div className='mt-4 flex justify-between'>
          <div className='h-3 w-20 rounded bg-gray-200' />
          <div className='h-3 w-32 rounded bg-gray-200' />
        </div>
      </div>

      <div className='row-span-2 animate-pulse rounded-lg bg-white p-4 shadow md:row-span-3'>
        <div className='mb-3 h-5 w-36 rounded bg-gray-200' />
        <div className='mb-2 h-7 w-20 rounded bg-gray-200' />
        <div className='h-24 w-full rounded bg-gray-200 xl:h-16' />
      </div>

      <div className='row-span-2 animate-pulse rounded-lg bg-white p-4 shadow md:row-span-3'>
        <div className='mb-4 h-5 w-36 rounded bg-gray-200' />
        <div className='flex items-center gap-4'>
          <div className='h-20 w-20 rounded-full bg-gray-200' />
          <div className='flex flex-col gap-3'>
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className='flex items-center gap-2'>
                <div className='h-3 w-3 rounded-full bg-gray-200' />
                <div className='h-3 w-28 rounded bg-gray-200' />
              </div>
            ))}
          </div>
        </div>
        <div className='mt-3 flex justify-between'>
          <div className='h-3 w-24 rounded bg-gray-200' />
          <div className='h-3 w-12 rounded bg-gray-200' />
        </div>
      </div>

      {Array.from({ length: 3 }).map((_, i) => (
        <div
          key={i}
          className='row-span-2 animate-pulse rounded-lg bg-white p-4 shadow'>
          <div className='mb-3 flex items-center justify-between'>
            <div className='h-4 w-32 rounded bg-gray-200' />
            <div className='h-3 w-24 rounded bg-gray-200' />
          </div>
          <div className='flex items-center gap-3'>
            <div className='h-10 w-10 rounded-full bg-gray-200' />
            <div className='flex flex-1 flex-col gap-4'>
              {Array.from({ length: 2 }).map((_, j) => (
                <div
                  key={j}
                  className='flex items-center justify-between'>
                  <div className='h-3 w-24 rounded bg-gray-200' />
                  <div className='flex items-center gap-2'>
                    <div className='h-4 w-16 rounded bg-gray-200' />
                    <div className='h-4 w-12 rounded bg-gray-200' />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
