import Image from 'next/image'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 585px;

  border-radius: 8px;

  padding: 1.25rem;

  background: ${(props) => props.theme.colors.gray700};
`

export const Profile = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  margin-bottom: 1.75rem;

  section {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`

export const ProfileName = styled.p`
  color: ${(props) => props.theme.colors.gray100};

  font-size: ${(props) => props.theme.size.md};
  font-weight: 400;
`

export const Time = styled.span`
  color: ${(props) => props.theme.colors.gray400};

  font-size: ${(props) => props.theme.size.sm};
  font-weight: 400;
`
export const BookDetails = styled.div`
  display: flex;
  gap: 1.125rem;

  img {
    border-radius: 4px;
  }
`

export const BookImage = styled(Image)`
  min-width: 108px;
  object-fit: cover;
  transition: 0.2s;

  &:hover {
    filter: brightness(1.2);
  }
`

export const BookContent = styled.div`
  display: flex;
  flex-direction: column;
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
export const Description = styled.p`
  font-size: 0.875rem;
  font-weight: 400;

  color: ${(props) => props.theme.colors.gray300};

  text-align: justify;

  margin-top: 1.125rem;
`
export const ToogleShowMoreButton = styled.button`
  background: none;
  border: none;

  font-size: 0.875rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.purple100};

  margin-left: 0.5rem;
`
