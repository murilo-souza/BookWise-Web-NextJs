import React from 'react'
import { ChartLineUp } from '@phosphor-icons/react'
import { Container, RatingSections, TitleSection } from './styles'
import { PageTitle } from '../ui/PageTitle'
import { RatingCard } from '../RatingCard'

export function LastRating() {
  return (
    <Container>
      <PageTitle icon={<ChartLineUp size={32} />} title="Início" />
      <TitleSection>Avaliações mais recentes</TitleSection>

      <RatingSections>
        {Array.from({ length: 20 }).map((_, i) => (
          <RatingCard
            key={i}
            rating={{
              id: 'aaaaa',
              rate: 4,
              user: {
                id: 'xcwecw',
                name: 'john Doe',
                avatar_url:
                  'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80',
                email: 'john@doegmail.com',
                created_at: new Date(),
              },
              book: {
                id: 'duwndcweu',
                author: 'John Doe',
                cover_url:
                  'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80',
                name: 'Jogn Doe',
                summary:
                  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias praesentium ad laboriosam sapiente ex dolorem neque aliquam atque. Soluta fuga eligendi blanditiis praesentium nihil a id odio molestiae tenetur quas Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam dolores, possimus optio odio repudiandae perspiciatis atque ipsum doloribus, sed vitae, error officiis libero. Dolor assumenda, quae architecto velit porro facere. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis ipsam numquam at aliquid rerum saepe voluptatum rem adipisci quisquam eveniet praesentium illo maxime quod esse recusandae earum, iure reprehenderit dignissimos.',
                total_pages: 100,
                created_at: new Date(),
              },
              created_at: new Date(),
            }}
          />
        ))}
      </RatingSections>
    </Container>
  )
}
