import React, { ButtonHTMLAttributes, ReactNode } from 'react'
import { Container } from './styles'

type ActionIconProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: ReactNode
  iconColor: 'purple' | 'green'
}

export function ActionIcon({ icon, iconColor, ...props }: ActionIconProps) {
  return (
    <Container {...props} iconColor={iconColor}>
      {icon}
    </Container>
  )
}
