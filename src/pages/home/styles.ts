import styled from 'styled-components'

export const Container = styled.main`
  display: grid;
  grid-template-columns: 10rem 40rem auto;
  column-gap: 4rem;

  padding: 4.5rem 6rem;
`

export const PageTitle = styled.h1`
  display: flex;
  align-items: center;

  font-size: 1.5rem;

  line-height: 1.4;

  gap: 0.75rem;

  color: ${(props) => props.theme.colors.gray100};

  margin-bottom: 2.5rem;

  svg {
    color: ${(props) => props.theme.colors.green100};
  }
`
