import React, { ReactNode } from 'react'
import { Container, Title } from './styles'

type PageTitleProps = {
  icon: ReactNode
  title: string
}

export function PageTitle({ icon, title }: PageTitleProps) {
  return (
    <Container>
      {icon}
      <Title>{title}</Title>
    </Container>
  )
}
