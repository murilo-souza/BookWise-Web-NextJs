import React, { useState } from 'react'
import { Container, TitleSection } from './styles'
import { Link } from '../ui/Link'
import { RatingWithAuthor, UserRatingCard } from '../UserRatingCard'
import { RatingForm } from '../ui/Form/RatingForm'

type BookRatingsProps = {
  ratings: RatingWithAuthor[]
  bookId: string
}

export function BookRatings({ ratings, bookId }: BookRatingsProps) {
  const [showForm, setShowForm] = useState(false)

  function handleRate() {
    setShowForm(true)
  }

  const sortedRatingsByDate = ratings.sort((a, b) => {
    return new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  })
  return (
    <Container>
      <header>
        <TitleSection>Avaliações</TitleSection>
        <Link text="Avaliar" withoutIcon onClick={handleRate} />
      </header>
      <section>
        {showForm && (
          <RatingForm bookId={bookId} onCancel={() => setShowForm(false)} />
        )}
        {sortedRatingsByDate.map((rating) => (
          <UserRatingCard key={rating.id} rating={rating} />
        ))}
      </section>
    </Container>
  )
}
