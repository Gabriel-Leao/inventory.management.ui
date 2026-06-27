export const DataGridSkeleton = ({ cols }: { cols: number }) => {
  return (
    <div className='mt-5 animate-pulse rounded-lg border border-gray-200 bg-white shadow'>
      <div className='flex gap-4 border-b border-gray-200 bg-gray-50 px-4 py-3'>
        <div className='h-4 w-4 rounded bg-gray-200' />
        {Array.from({ length: cols }).map((_, i) => (
          <div
            key={i}
            className='h-4 flex-1 rounded bg-gray-200'
          />
        ))}
      </div>

      {Array.from({ length: 10 }).map((_, i) => (
        <div
          key={i}
          className='flex gap-4 border-b border-gray-100 px-4 py-3 last:border-0'>
          <div className='h-4 w-4 rounded bg-gray-200' />
          {Array.from({ length: cols }).map((_, j) => (
            <div
              key={j}
              className='h-4 flex-1 rounded bg-gray-200'
              style={{ maxWidth: j === 0 ? '8rem' : undefined }}
            />
          ))}
        </div>
      ))}
    </div>
  )
}
