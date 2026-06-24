type PageTitleProps = {
  name: string
}

export const PageTitle = ({ name }: PageTitleProps) => {
  return <h1 className='text-2xl font-semibold text-gray-700'>{name}</h1>
}
