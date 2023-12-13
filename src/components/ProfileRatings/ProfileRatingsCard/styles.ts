import Image from 'next/image'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`
export const CardContent = styled.div`
  background: ${(props) => props.theme.colors.gray700};
  border-radius: 8px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const BookDetails = styled.div`
  display: flex;
  gap: 1.5rem;

  > section {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`

export const BookImage = styled(Image)`
  min-width: 98px;
  object-fit: cover;
  border-radius: 4px;
  transition: 0.2s;

  &:hover {
    filter: brightness(1.2);
  }
`

export const Title = styled.h3`
  font-size: 1rem;

  line-height: 1.4;

  color: ${(props) => props.theme.colors.gray100};
`

export const Author = styled.span`
  font-size: 0.875rem;
  font-weight: 400;

  line-height: 1.4;

  color: ${(props) => props.theme.colors.gray400};
`

export const Time = styled.span`
  color: ${(props) => props.theme.colors.gray400};

  font-size: ${(props) => props.theme.size.sm};
  font-weight: 400;
`
export const Description = styled.p`
  font-size: 0.875rem;
  font-weight: 400;

  color: ${(props) => props.theme.colors.gray300};

  text-align: justify;

  margin-top: 1.125rem;
`
