import React from 'react'
import {
  Author,
  BookDetails,
  BookImage,
  CardContent,
  Container,
  Description,
  Time,
  Title,
} from './styles'
import { ProfileRating } from '..'
import { getRelativeTimeString } from '@/utils/getRelativeTimeString'
import Link from 'next/link'
import { RatingStars } from '@/components/RatingStars'

type ProfileRatingCardProps = {
  rating: ProfileRating
}

export function ProfileRatingsCard({ rating }: ProfileRatingCardProps) {
  const distance = getRelativeTimeString(new Date(rating.created_at), 'pt-BR')

  return (
    <Container>
      <Time>{distance}</Time>
      <CardContent>
        <BookDetails>
          <Link
            style={{ display: 'flex' }}
            href={`/explore?book=${rating.book_id}`}
          >
            <BookImage
              src={rating.book.cover_url}
              alt={rating.book.name}
              width={98}
              height={134}
            />
          </Link>
          <section>
            <div>
              <Title>{rating.book.name}</Title>
              <Author>{rating.book.author}</Author>
            </div>
            <RatingStars rating={rating.rate} />
          </section>
        </BookDetails>
        <Description>{rating.description}</Description>
      </CardContent>
    </Container>
  )
}
