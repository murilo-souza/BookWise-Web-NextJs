import { Star } from '@phosphor-icons/react'
import { Container } from './styles'

interface RatingStarsProps {
  size?: 'sm' | 'md' | 'lg'
  rating: number
}

export function RatingStars({ size = 'sm', rating }: RatingStarsProps) {
  return (
    <Container size={size}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={`star-${i}`} weight={i + 1 <= rating ? 'fill' : 'regular'} />
      ))}
    </Container>
  )
}
