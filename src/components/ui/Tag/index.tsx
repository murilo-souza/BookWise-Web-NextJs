import React, { ButtonHTMLAttributes, ReactNode } from 'react'
import { Container } from './styles'

type TagProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  variant: boolean
}

export function Tag({ children, variant, ...rest }: TagProps) {
  return (
    <Container variant={variant} {...rest}>
      {children}
    </Container>
  )
}
