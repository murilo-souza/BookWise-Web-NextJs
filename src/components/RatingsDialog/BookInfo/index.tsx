import React, { ReactNode } from 'react'
import { Container, Info, Title } from './styles'

type BookInfoProps = {
  icon: ReactNode
  title: string
  info: string
}

export function BookInfo({ icon, title, info }: BookInfoProps) {
  return (
    <Container>
      {icon}
      <div>
        <Title>{title}</Title>
        <Info>{info}</Info>
      </div>
    </Container>
  )
}
