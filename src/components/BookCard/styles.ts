import Image from 'next/image'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;

  gap: 1.25rem;

  padding: 18px 1.25rem;

  background: ${(props) => props.theme.colors.gray700};

  border-radius: 8px;

  cursor: pointer;

  border: 1px solid ${(props) => props.theme.colors.gray700};

  transition: 0.2s;

  &:hover {
    border-color: ${(props) => props.theme.colors.gray600};
  }
`

export const BookImage = styled(Image)`
  border-radius: 4px;

  object-fit: cover;
`

export const BookDetails = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: space-between;
`

export const BookName = styled.h3`
  font-size: 1rem;

  line-height: 1.4;

  color: ${(props) => props.theme.colors.gray100};

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`
export const Author = styled.span`
  font-size: 0.875rem;
  font-weight: 400;

  line-height: 1.4;

  color: ${(props) => props.theme.colors.gray400};
`
