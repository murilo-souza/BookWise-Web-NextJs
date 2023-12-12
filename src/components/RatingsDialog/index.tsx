import * as Dialog from '@radix-ui/react-dialog'
import { ReactNode, useState } from 'react'
import {
  Author,
  AvaliationText,
  BookContent,
  BookDetailsContainer,
  BookDetailsWrapper,
  BookImage,
  BookInfos,
  BookName,
  DialogClose,
  DialogContent,
  DialogOverlay,
} from './styles'
import { BookOpen, BookmarkSimple, X } from '@phosphor-icons/react'
import { RatingStars } from '../RatingStars'
import { BookInfo } from './BookInfo'
import { BookRatings } from '../BookRatings'
import { useQuery } from '@tanstack/react-query'
import { api } from '@/lib/axios'
import { BookWithAvgRoting } from '../BookCard'
import { RatingWithAuthor } from '../UserRatingCard'
import { CategoriesOnBooks, Category } from '@prisma/client'

type BookDetails = BookWithAvgRoting & {
  ratings: RatingWithAuthor[]
  categories: (CategoriesOnBooks & {
    category: Category
  })[]
}

type RatingsDialogProps = {
  bookId: string
  children: ReactNode
}

export function RatingsDialog({ children, bookId }: RatingsDialogProps) {
  const [open, setOpen] = useState(false)

  const { data: book } = useQuery<BookDetails>({
    queryKey: ['book', bookId],
    queryFn: async () => {
      const { data } = await api.get(`/books/details/${bookId}`)

      return data?.book ?? {}
    },
  })

  const ratingsLength = book?.ratings.length ?? 0

  const categories =
    book?.categories?.map((x) => x?.category?.name)?.join(', ') ?? ''

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>

      <Dialog.Portal>
        <DialogOverlay />
        <DialogContent>
          <DialogClose>
            <X size={24} />
          </DialogClose>
          {!book ? (
            <p>Carregando...</p>
          ) : (
            <>
              <BookDetailsWrapper>
                <BookDetailsContainer>
                  <BookImage
                    width={171}
                    height={242}
                    alt={book?.name}
                    src={book?.cover_url}
                  />
                  <BookContent>
                    <div>
                      <BookName>{book.name}</BookName>
                      <Author>{book.author}</Author>
                    </div>

                    <div>
                      <RatingStars rating={4} size="md"></RatingStars>
                      <AvaliationText>
                        {ratingsLength}{' '}
                        {ratingsLength === 1 ? 'avaliação' : 'avaliações'}
                      </AvaliationText>
                    </div>
                  </BookContent>
                </BookDetailsContainer>
                <BookInfos>
                  <BookInfo
                    icon={<BookmarkSimple />}
                    title="Categorias"
                    info={categories}
                  />

                  <BookInfo
                    icon={<BookOpen />}
                    title="Paginas"
                    info={String(book.total_pages)}
                  />
                </BookInfos>
              </BookDetailsWrapper>
              <BookRatings ratings={book.ratings} />
            </>
          )}
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
