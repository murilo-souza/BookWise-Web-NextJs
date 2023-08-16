import React from 'react'
import { Container, LogoContainer, SignInButton } from './styles'
import Image from 'next/image'
import LogoSVG from '../../assets/logo.svg'
import { ChartLineUp, Binoculars, SignIn, User } from '@phosphor-icons/react'

import { ActiveLink } from '../ActiveLink'

export function Sidebar() {
  return (
    <Container>
      <LogoContainer>
        <Image src={LogoSVG} alt="Logo" />
      </LogoContainer>
      <ActiveLink href="/home">
        <ChartLineUp size={24} />
        Inicio
      </ActiveLink>
      <ActiveLink href="/explore">
        <Binoculars size={24} />
        Explorar
      </ActiveLink>
      <ActiveLink href="/profile">
        <User size={24} />
        Perfil
      </ActiveLink>
      <SignInButton>
        Fazer login <SignIn size={20} />
      </SignInButton>
    </Container>
  )
}
