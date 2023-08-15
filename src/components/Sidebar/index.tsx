import React from 'react'
import { Container, LogoContainer, NavLink } from './styles'
import Image from 'next/image'
import LogoSVG from '../../assets/logo.svg'
import { ChartLineUp, Binoculars } from '@phosphor-icons/react'

export function Sidebar() {
  return (
    <Container>
      <LogoContainer>
        <Image src={LogoSVG} alt="Logo" />
      </LogoContainer>
      <NavLink href="/">
        <ChartLineUp size={24} />
        Inicio
      </NavLink>
      <NavLink href="/">
        <Binoculars size={24} />
        Explorar
      </NavLink>
    </Container>
  )
}
