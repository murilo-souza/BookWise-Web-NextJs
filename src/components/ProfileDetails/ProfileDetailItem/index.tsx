import React, { ReactNode } from 'react'
import { Container, InfoSubtext, InfoText } from './styles'

type ProfileDetailItemProps = {
  icon: ReactNode
  info: string | number
  label: string
}

export function ProfileDetailItem({
  icon,
  info,
  label,
}: ProfileDetailItemProps) {
  return (
    <Container>
      {icon}
      <div>
        <InfoText>{info}</InfoText>
        <InfoSubtext>{label}</InfoSubtext>
      </div>
    </Container>
  )
}
