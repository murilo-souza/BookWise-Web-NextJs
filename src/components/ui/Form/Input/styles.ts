import styled, { css } from 'styled-components'

interface Props {
  Vsize: 'md' | 'lg'
}

export const InputContainer = styled.div<Props>`
  background: ${(props) => props.theme.colors.gray800};
  border: 1px solid currentColor;
  display: flex;
  align-items: center;

  height: 48px;
  border-radius: 4px;
  gap: 1.25rem;
  padding-right: 1.25rem;
  color: ${(props) => props.theme.colors.gray500};
  transition: 0.2s;

  &:focus-within {
    color: ${(props) => props.theme.colors.green200};
  }

  ${({ Vsize }) =>
    Vsize === 'md' &&
    css`
      width: 433px;
    `}

  ${({ Vsize }) =>
    Vsize === 'lg' &&
    css`
      width: 600px;
    `}

  margin-bottom: 32px;

  input {
    height: 48px;
    flex: 1;
    padding-left: 1.25rem;
    background: none;
    border: none;
    color: ${(props) => props.theme.colors.gray100};
    font-size: 0.875rem;

    &::placeholder {
      color: ${(props) => props.theme.colors.gray400};
    }

    &:focus {
      outline: none;
    }
  }
`
