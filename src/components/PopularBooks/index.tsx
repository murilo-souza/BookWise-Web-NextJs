import React from 'react'
import { Container, TitleSection } from './styles'
import { Link } from '../ui/Link'
import { BookCard } from '../BookCard'

export function PopularBooks() {
  return (
    <Container>
      <header>
        <TitleSection>Livros Populares</TitleSection>
        <Link text="Ver todos" href="/explore" />
      </header>
      <section>
        {Array.from({ length: 4 }).map((_, index) => (
          <BookCard
            key={`popular-${index}`}
            book={{
              id: 'ncuenu',
              author: 'John Doe',
              avgRating: 4,
              cover_url:
                'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80',
              created_at: new Date(),
              name: 'Os 3 porquinhos Os 3 porquinhosOs 3 porquinhosOs 3 porquinhosOs 3 porquinhos',
              summary: 'TGvvwdd UNBUNuw gyvtdvwdtv ununu',
              total_pages: 100,
            }}
          />
        ))}
      </section>
    </Container>
  )
}
