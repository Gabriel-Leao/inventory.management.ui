import { Star } from 'lucide-react'

type RatingProps = {
  stars: number
}

export const Rating = ({ stars }: RatingProps) => {
  return [1, 2, 3, 4, 5].map((index) => (
    <Star
      key={index}
      color={index <= stars ? '#FFC107' : '#E4E5E9'}
      className='h-4 w-4'
    />
  ))
}
