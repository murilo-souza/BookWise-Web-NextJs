import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 1.25rem 1.5rem;

  background-color: ${(props) => props.theme.colors.gray700};

  border-radius: 8px;
`

export const Container = styled.div`
  display: flex;
  gap: 1.5rem;
`

export const Content = styled.div`
  width: 100%;
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 0.75rem;

  span {
    font-size: 0.875rem;
    font-weight: 400;
  }
`

export const ProfileWrapper = styled.div``

export const TextWrapper = styled.section`
  margin-bottom: 1.5rem;
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
`
