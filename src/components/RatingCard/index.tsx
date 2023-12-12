import Link from 'next/link'
import {
  Author,
  BookContent,
  BookDetails,
  BookImage,
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
}

export function RatingCard({ rating }: RatingCardProps) {
  const distance = getRelativeTimeString(new Date(rating.created_at), 'pt-BR')

  const { text, isShowingMore, toogleShowMore } = useToogleShowMore(
    rating.book.summary,
    180,
  )

  return (
    <Container>
      <Profile>
        <section>
          <Link href={`/profile/${rating.user_id}`}>
            <Avatar
              src={rating.user.avatar_url!}
              alt={rating.user.name}
              AvatarSize="md"
            />
          </Link>
          <div>
            <ProfileName>{rating.user.name}</ProfileName>
            <Time>{distance}</Time>
          </div>
        </section>
        <RatingStars rating={rating.rate} />
      </Profile>
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
