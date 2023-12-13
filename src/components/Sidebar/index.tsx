import React from 'react'
import {
  Container,
  LogoContainer,
  Profile,
  ProfileName,
  SignInButton,
} from './styles'
import Image from 'next/image'
import LogoSVG from '../../assets/logo.svg'
import { SignIn, SignOut } from '@phosphor-icons/react'
import { Navigation } from '../Navigation'
import { signOut, useSession } from 'next-auth/react'
import { Avatar } from '../ui/Avatar'

export function Sidebar() {
  const { data: session } = useSession()

  const user = session?.user

  return (
    <Container>
      <div>
        <LogoContainer>
          <Image src={LogoSVG} alt="Logo" />
        </LogoContainer>
        <Navigation />
      </div>
      <footer>
        {!user ? (
          <SignInButton href="/login">
            Fazer login <SignIn size={20} />
          </SignInButton>
        ) : (
          <Profile>
            <Avatar size="sm" src={user?.avatar_url} alt={user?.name} />
            <ProfileName>{user?.name}</ProfileName>
            <SignOut color="#F75A68" size={20} onClick={() => signOut()} />
          </Profile>
        )}
      </footer>
    </Container>
  )
}
