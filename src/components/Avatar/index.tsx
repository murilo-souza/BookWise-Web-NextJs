import React from 'react'
import {
  AvatarContainer,
  AvatarRoot,
  AvatarImage,
  AvatarFallback,
  ProfileName,
  Time,
  TextWrapper,
} from './styles'

export function Avatar() {
  return (
    <AvatarContainer>
      <AvatarRoot>
        <AvatarImage
          src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
          alt="Colm Tuite"
        />
        <AvatarFallback delayMs={600}>CT</AvatarFallback>
      </AvatarRoot>
      <TextWrapper>
        <ProfileName>Jaxson Dias</ProfileName>
        <Time>Hoje</Time>
      </TextWrapper>
    </AvatarContainer>
  )
}
