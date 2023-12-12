import React from 'react'
import { Container, TitleSection } from './styles'
import { Link } from '../ui/Link'
import { BookCard, BookWithAvgRoting } from '../BookCard'
import { useQuery } from '@tanstack/react-query'
import { api } from '@/lib/axios'

export function PopularBooks() {
  const { data: popularBooks } = useQuery<BookWithAvgRoting[]>({
    queryKey: ['popular-books'],
    queryFn: async () => {
      const { data } = await api.get('/books/popular')
      return data?.books ?? []
    },
  })

  return (
    <Container>
      <header>
        <TitleSection>Livros Populares</TitleSection>
        <Link text="Ver todos" href="/explore" />
      </header>
      <section>
        {popularBooks?.map((book) => (
          <BookCard key={`popular-${book.id}`} book={book} />
        ))}
      </section>
    </Container>
  )
}
