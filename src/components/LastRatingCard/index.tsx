import React from 'react'
import {
  Author,
  Container,
  Content,
  Description,
  Header,
  ProfileWrapper,
  TextWrapper,
  Title,
  Wrapper,
} from './styles'
import Image from 'next/image'
import Book from '../../assets/Book.png'
import { Star } from '@phosphor-icons/react'
import { Avatar } from '../Avatar'

export function LastRatingCard() {
  return (
    <Wrapper>
      <Header>
        <ProfileWrapper>
          <Avatar />
        </ProfileWrapper>
        <div>
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </div>
      </Header>
      <Container>
        <Image src={Book} alt="Book" width={108} height={152} />
        <Content>
          <TextWrapper>
            <Title>Entendendo Algoritmos</Title>
            <Author>Aditya Bhargava</Author>
          </TextWrapper>
          <Description>
            Semper et sapien proin vitae nisi. Feugiat neque integer donec et
            aenean posuere amet ultrices. Cras fermentum id pulvinar varius leo
            a in. Amet libero pharetra nunc elementum fringilla velit ipsum. Sed
            vulputate massa velit nibh...
          </Description>
        </Content>
      </Container>
    </Wrapper>
  )
}
