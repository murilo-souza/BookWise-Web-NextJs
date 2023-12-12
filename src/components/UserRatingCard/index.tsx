import React from 'react'
import {
  Container,
  Description,
  ProfileName,
  Time,
  UserDetails,
} from './styles'
import Link from 'next/link'
import { Rating, User } from '@prisma/client'
import { useSession } from 'next-auth/react'
import { Avatar } from '../ui/Avatar'
import { getRelativeTimeString } from '@/utils/getRelativeTimeString'
import { RatingStars } from '../RatingStars'

export type RatingWithAuthor = Rating & {
  user: User
}

interface UserRatingCardProps {
  rating: RatingWithAuthor
}

export function UserRatingCard({ rating }: UserRatingCardProps) {
  const { data: session } = useSession()
  const isOwner = session?.user.id === rating.user_id
  const distance = getRelativeTimeString(new Date(rating.created_at), 'pt-BR')

  return (
    <Container variant={isOwner ? 'highlight' : 'primary'}>
      <UserDetails>
        <section>
          <Link href={`/profile/${rating.id}`}>
            <Avatar
              alt={rating.user.name}
              src={rating.user.avatar_url!}
              AvatarSize="md"
            />
          </Link>
          <div>
            <ProfileName>{rating.user.name}</ProfileName>
            <Time>{distance}</Time>
          </div>
        </section>
        <RatingStars rating={rating.rate} />
      </UserDetails>
      <Description>{rating.description}</Description>
    </Container>
  )
}
