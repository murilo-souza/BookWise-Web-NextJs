import React from 'react'
import { Container } from './styles'
import { CaretLeft, CaretRight } from '@phosphor-icons/react'

type LinkProps = Omit<any, 'href'> & {
  text: string
  href?: string
  onClick?: () => void
  withoutIcon?: boolean
  side?: 'left' | 'right'
  variantColor?: 'white' | 'purple'
}

export function Link({
  text,
  href,
  onClick,
  withoutIcon,
  side = 'right',
  variantColor = 'purple',
}: LinkProps) {
  return (
    <Container
      side={side}
      variantColor={variantColor}
      href={href!}
      as={onClick ? 'button' : undefined}
      onClick={onClick}
    >
      {text}
      {!withoutIcon && (side === 'right' ? <CaretRight /> : <CaretLeft />)}
    </Container>
  )
}
