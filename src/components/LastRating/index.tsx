import React from 'react'
import { ChartLineUp } from '@phosphor-icons/react'
import { Container, RatingSections, TitleSection } from './styles'
import { PageTitle } from '../ui/PageTitle'
import { RatingCard, RatingWithAuthorAndBook } from '../RatingCard'
import { useQuery } from '@tanstack/react-query'
import { api } from '@/lib/axios'

export function LastRating() {
  const { data: ratings } = useQuery<RatingWithAuthorAndBook[]>({
    queryKey: ['latest-ratings'],
    queryFn: async () => {
      const { data } = await api.get('/ratings/latest')
      return data?.ratings ?? []
    },
  })

  console.log(ratings)
  return (
    <Container>
      <PageTitle icon={<ChartLineUp size={32} />} title="Início" />
      <TitleSection>Avaliações mais recentes</TitleSection>

      <RatingSections>
        {ratings?.map((rating) => (
          <RatingCard key={rating.id} rating={rating} />
        ))}
      </RatingSections>
    </Container>
  )
}
