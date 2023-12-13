import React from 'react'
import { ChartLineUp } from '@phosphor-icons/react'
import {
  Container,
  LatestContainer,
  RatingSections,
  TitleSection,
} from './styles'
import { PageTitle } from '../ui/PageTitle'
import { RatingCard, RatingWithAuthorAndBook } from '../RatingCard'
import { useQuery } from '@tanstack/react-query'
import { api } from '@/lib/axios'
import { useSession } from 'next-auth/react'
import { Link } from '../ui/Link'

export function LastRating() {
  const { data: ratings } = useQuery<RatingWithAuthorAndBook[]>({
    queryKey: ['latest-ratings'],
    queryFn: async () => {
      const { data } = await api.get('/ratings/latest')
      return data?.ratings ?? []
    },
  })

  const { data: session } = useSession()

  const userId = session?.user?.id

  const { data: latestUserRating } = useQuery<RatingWithAuthorAndBook>({
    queryKey: ['latest-user-rating', userId],
    queryFn: async () => {
      const { data } = await api.get('/ratings/user-latest')
      return data?.rating ?? null
    },
    enabled: !!userId,
  })

  return (
    <Container>
      <PageTitle icon={<ChartLineUp size={32} />} title="Início" />

      {latestUserRating && (
        <LatestContainer>
          <header>
            <TitleSection>Sua última avaliação</TitleSection>
            <Link text="Ver todos" href={`/profile/${userId}`} />
          </header>
          <RatingCard rating={latestUserRating} variant="compact" />
        </LatestContainer>
      )}

      <TitleSection>Avaliações mais recentes</TitleSection>

      <RatingSections>
        {ratings?.map((rating) => (
          <RatingCard key={rating.id} rating={rating} />
        ))}
      </RatingSections>
    </Container>
  )
}
