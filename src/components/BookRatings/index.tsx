import React, { Fragment, useState } from 'react'
import { Container, TitleSection } from './styles'
import { Link } from '../ui/Link'
import { RatingWithAuthor, UserRatingCard } from '../UserRatingCard'
import { RatingForm } from '../ui/Form/RatingForm'
import { useSession } from 'next-auth/react'
import { LoginDialog } from '../LoginDialog'

type BookRatingsProps = {
  ratings: RatingWithAuthor[]
  bookId: string
}

export function BookRatings({ ratings, bookId }: BookRatingsProps) {
  const { status, data: session } = useSession()
  const [showForm, setShowForm] = useState(false)

  const isAuthenticated = status === 'authenticated'

  function handleRate() {
    if (!isAuthenticated) return
    setShowForm(true)
  }

  const sortedRatingsByDate = ratings.sort((a, b) => {
    return new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  })

  const RatingWrapper = isAuthenticated ? Fragment : LoginDialog

  const canRate = ratings.every((x) => x.user_id !== session?.user?.id)
  return (
    <Container>
      <header>
        <TitleSection>Avaliações</TitleSection>
        {canRate && (
          <RatingWrapper>
            <Link text="Avaliar" withoutIcon onClick={handleRate} />
          </RatingWrapper>
        )}
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
