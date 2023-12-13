import React from 'react'
import {
  Container,
  MemberText,
  ProfileDetailsWrapper,
  UserInfo,
  UserName,
} from './styles'
import { ProfileData } from '@/pages/profile/[id].page'
import { Avatar } from '../ui/Avatar'
import { ProfileDetailItem } from './ProfileDetailItem'
import { Book, BookOpen } from '@phosphor-icons/react'

type ProfileDetailsProps = {
  profile: ProfileData
}

export function ProfileDetails({ profile }: ProfileDetailsProps) {
  const memberSinceYear = new Date(profile.user.member_since).getFullYear()

  return (
    <Container>
      <UserInfo>
        <Avatar
          size="lg"
          alt={profile.user.name}
          src={profile.user.avatar_url}
        />
        <UserName>{profile.user.name}</UserName>
        <MemberText>membro desde {memberSinceYear}</MemberText>
      </UserInfo>
      <ProfileDetailsWrapper>
        <ProfileDetailItem
          icon={<BookOpen />}
          info={profile.readPages}
          label="Páginas lidas"
        />

        <ProfileDetailItem
          icon={<Book />}
          info={profile.ratedBooks}
          label="Livros avaliados"
        />

        <ProfileDetailItem
          icon={<BookOpen />}
          info={profile.readAuthors}
          label="Autores lidos"
        />

        {profile.mostReadCategory && (
          <ProfileDetailItem
            icon={<BookOpen />}
            info={profile.mostReadCategory}
            label="Categoria mais lida"
          />
        )}
      </ProfileDetailsWrapper>
    </Container>
  )
}
