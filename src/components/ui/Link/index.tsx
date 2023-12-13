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
  txtContainer?: 'long' | 'short'
}

export function Link({
  text,
  href,
  onClick,
  withoutIcon,
  side = 'right',
  variantColor = 'purple',
  txtContainer = 'long',
}: LinkProps) {
  return (
    <Container
      side={side}
      variantColor={variantColor}
      href={href!}
      as={onClick ? 'button' : undefined}
      onClick={onClick}
      txtContainer={txtContainer}
    >
      {text}
      {!withoutIcon && (side === 'right' ? <CaretRight /> : <CaretLeft />)}
    </Container>
  )
}
