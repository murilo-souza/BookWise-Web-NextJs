import Link from 'next/link'
import {
  Author,
  BookContent,
  BookDetails,
  BookImage,
  CompactDetails,
  Container,
  Description,
  Profile,
  ProfileName,
  Time,
  Title,
  ToogleShowMoreButton,
} from './styles'
import { Avatar } from '../ui/Avatar'
import { Book, Rating, User } from '@prisma/client'
import { getRelativeTimeString } from '@/utils/getRelativeTimeString'
import { RatingStars } from '../RatingStars'
import { useToogleShowMore } from '@/hooks/useToogleShowMore'

export type RatingWithAuthorAndBook = Rating & {
  user: User
  book: Book
}

type RatingCardProps = {
  rating: RatingWithAuthorAndBook
  variant?: 'default' | 'compact'
}

export function RatingCard({ rating, variant = 'default' }: RatingCardProps) {
  const distance = getRelativeTimeString(new Date(rating.created_at), 'pt-BR')

  const { text, isShowingMore, toogleShowMore } = useToogleShowMore(
    rating.book.summary,
    180,
  )

  return (
    <Container variant={variant}>
      {variant === 'default' && (
        <Profile>
          <section>
            <Link href={`/profile/${rating.user_id}`}>
              <Avatar
                src={rating.user.avatar_url!}
                alt={rating.user.name}
                size="md"
              />
            </Link>
            <div>
              <ProfileName>{rating.user.name}</ProfileName>
              <Time>{distance}</Time>
            </div>
          </section>
          <RatingStars rating={rating.rate} />
        </Profile>
      )}
      <BookDetails>
        <Link href={`/explore?book=${rating.book_id}`}>
          <BookImage
            width={108}
            height={152}
            alt={rating.book.name}
            src={rating.book.cover_url}
          />
        </Link>
        <BookContent>
          <div>
            {variant === 'compact' && (
              <CompactDetails>
                <Time>{distance}</Time>
                <RatingStars rating={rating.rate} />
              </CompactDetails>
            )}
            <Title>{rating.book.name}</Title>
            <Author>{rating.book.author}</Author>
          </div>

          <Description>
            {text}
            {rating.book.summary.length > 180 && (
              <ToogleShowMoreButton onClick={toogleShowMore}>
                {isShowingMore ? 'Mostar menos' : 'Mostrar mais'}
              </ToogleShowMoreButton>
            )}
          </Description>
        </BookContent>
      </BookDetails>
    </Container>
  )
}
