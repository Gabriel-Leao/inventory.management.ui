type TitleProps = {
  name: string
}

export const Title = ({ name }: TitleProps) => {
  return <h1 className='text-2xl font-semibold text-gray-700'>{name}</h1>
}
