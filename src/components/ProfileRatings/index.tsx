import React, { useState } from 'react'
import { Container, RatingsList } from './styles'
import { Book, CategoriesOnBooks, Category, Rating } from '@prisma/client'
import { PageTitle } from '../ui/PageTitle'
import { MagnifyingGlass, User } from '@phosphor-icons/react'
import { Link } from '../ui/Link'
import { Input } from '../ui/Form/Input'
import { ProfileRatingsCard } from './ProfileRatingsCard'

export type ProfileRating = Rating & {
  book: Book & {
    categories: CategoriesOnBooks &
      {
        category: Category
      }[]
  }
}

type ProfileRatingsProps = {
  ratings: ProfileRating[]
  isOwnProfile: boolean
}

export function ProfileRatings({ ratings, isOwnProfile }: ProfileRatingsProps) {
  const [search, setSearch] = useState('')
  return (
    <Container>
      {isOwnProfile ? (
        <PageTitle title="Perfil" icon={<User size={25} />} />
      ) : (
        <Link
          href="/"
          text="Voltar"
          side="left"
          variantColor="white"
          style={{ alignSelf: 'flex-start' }}
        />
      )}

      <Input
        placeholder="Buscar livro avaliado"
        icon={<MagnifyingGlass size={20} />}
        value={search}
        onChange={({ target }) => setSearch(target.value)}
        Vsize="lg"
      />

      <RatingsList>
        {ratings.map((rating) => (
          <ProfileRatingsCard key={rating.id} rating={rating} />
        ))}
      </RatingsList>
    </Container>
  )
}
