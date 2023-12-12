import React from 'react'
import {
  Author,
  BookDetails,
  BookImage,
  BookName,
  Container,
  ReadBadge,
} from './styles'
import { Book } from '@prisma/client'
import { RatingStars } from '../RatingStars'

export type BookWithAvgRoting = Book & {
  avgRating: number
  alreadyRead: boolean
}

type BookCardProps = {
  book: BookWithAvgRoting

  size?: 'md' | 'lg'
}

export function BookCard({ book, size = 'md' }: BookCardProps) {
  const IMAGE_SIZES = {
    md: {
      width: 64,
      height: 94,
    },
    lg: {
      width: 108,
      height: 151,
    },
  }

  const currentSize = IMAGE_SIZES[size]

  return (
    <Container>
      {book?.alreadyRead && <ReadBadge>LIDO</ReadBadge>}
      <BookImage
        width={currentSize.width}
        height={currentSize.height}
        alt={book.name}
        src={book.cover_url}
        style={{ minWidth: currentSize.width }}
      />
      <BookDetails>
        <div>
          <BookName>{book.name}</BookName>
          <Author>{book.author}</Author>
        </div>
        <RatingStars rating={book.avgRating} />
      </BookDetails>
    </Container>
  )
}
