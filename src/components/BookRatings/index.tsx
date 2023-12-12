import React from 'react'
import { Container, TitleSection } from './styles'
import { Link } from '../ui/Link'
import { RatingWithAuthor, UserRatingCard } from '../UserRatingCard'
import { RatingStars } from '../RatingStars'

type BookRatingsProps = {
  ratings: RatingWithAuthor[]
}

export function BookRatings({ ratings }: BookRatingsProps) {
  function handleRate() {
    console.log('ndjw')
  }
  return (
    <Container>
      <header>
        <TitleSection>Avaliações</TitleSection>
        <Link text="Avaliar" withoutIcon onClick={handleRate} />
      </header>
      <section>
        {ratings.map((rating) => (
          <UserRatingCard key={rating.id} rating={rating} />
        ))}
      </section>
    </Container>
  )
}
