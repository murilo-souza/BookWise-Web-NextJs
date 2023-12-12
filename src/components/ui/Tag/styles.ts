import styled, { css } from 'styled-components'

interface ButtonProps {
  variant: boolean
}

export const Container = styled.button<ButtonProps>`
  background: none;
  color: ${(props) => props.theme.colors.purple100};
  border: 1px solid ${(props) => props.theme.colors.purple100};
  padding: 0.25rem 1rem;
  border-radius: 999999px;
  transition: 0.2s;

  &:hover {
    color: ${(props) => props.theme.colors.gray100};
    background: ${(props) => props.theme.colors.purple200};
  }

  ${({ variant }) =>
    variant &&
    css`
      color: ${(props) => props.theme.colors.gray100};
      background: ${(props) => props.theme.colors.purple200};
      border: 1px solid ${(props) => props.theme.colors.purple200};
    `}
`
