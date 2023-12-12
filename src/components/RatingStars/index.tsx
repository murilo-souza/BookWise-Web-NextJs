import { Star } from '@phosphor-icons/react'
import { Container } from './styles'
import { useState } from 'react'

interface RatingStarsProps {
  size?: 'sm' | 'md' | 'lg'
  rating: number
  setRating?: (rating: number) => void
}

export function RatingStars({
  size = 'sm',
  setRating,
  rating,
}: RatingStarsProps) {
  const [previewValue, setPreviewValue] = useState(0)

  const isEditable = !!setRating

  const ratingValue = isEditable ? previewValue : rating

  function handleMouseEnter(value: number) {
    if (isEditable) setPreviewValue(value)
  }

  function handleMouseLeave() {
    if (isEditable) setPreviewValue(rating)
  }

  function handleSetValue() {
    if (isEditable) setRating(previewValue)
  }

  return (
    <Container
      style={isEditable ? { cursor: 'pointer' } : undefined}
      size={size}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={`star-${i}`}
          weight={i + 1 <= ratingValue ? 'fill' : 'regular'}
          onMouseEnter={() => handleMouseEnter(i + 1)}
          onMouseLeave={handleMouseLeave}
          onClick={handleSetValue}
        />
      ))}
    </Container>
  )
}
