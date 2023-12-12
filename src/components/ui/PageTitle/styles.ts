import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  svg {
    color: ${(props) => props.theme.colors.green100};
  }

  margin-bottom: 40px;
`
export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;

  color: ${(props) => props.theme.colors.gray100};
`
