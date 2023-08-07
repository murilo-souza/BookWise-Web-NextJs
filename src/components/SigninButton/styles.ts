import styled from 'styled-components'

export const Container = styled.button`
  width: 23.25rem;
  height: 4.5rem;

  display: flex;
  align-items: center;

  border: 0;
  border-radius: 8px;

  padding: 1.25rem 1.5rem;

  gap: 1.25rem;

  margin-bottom: 1rem;

  background-color: ${(props) => props.theme.colors.gray600};

  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.gray500};
  }
`

export const Title = styled.h3`
  color: ${(props) => props.theme.colors.gray200};

  font-size: ${(props) => props.theme.size.lg};
  font-weight: bold;

  line-height: 1.6;
`
