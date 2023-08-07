import React, { ButtonHTMLAttributes } from 'react'
import { Container, Title } from './styles'

import Image from 'next/image'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  img: string
  title: string
}

export function SigninButton({ img, title, ...rest }: ButtonProps) {
  return (
    <Container {...rest}>
      <Image src={img} alt="SignIn Method" />
      <Title>{title}</Title>
    </Container>
  )
}
