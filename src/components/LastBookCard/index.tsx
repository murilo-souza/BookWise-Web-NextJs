import React from 'react'
import {
  Author,
  Container,
  Content,
  Description,
  Header,
  TextWrapper,
  Title,
} from './styles'
import Image from 'next/image'
import Book from '../../assets/Book.png'
import { Star } from '@phosphor-icons/react'

export function LastBookCard() {
  return (
    <Container>
      <Image src={Book} alt="Book" width={108} height={152} />
      <Content>
        <Header>
          <span>Há 2 dias</span>
          <div>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
        </Header>
        <TextWrapper>
          <Title>Entendendo Algoritmos</Title>
          <Author>Aditya Bhargava</Author>
        </TextWrapper>
        <Description>
          Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis.
          Penatibus id vestibulum imperdiet a at imperdiet lectu...
        </Description>
      </Content>
    </Container>
  )
}
