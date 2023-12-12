import styled, { css } from 'styled-components'

interface Props {
  iconColor: 'purple' | 'green'
}

export const Container = styled.button<Props>`
  width: 40px;
  height: 40px;

  border-radius: 4px;

  background: ${(props) => props.theme.colors.gray600};

  transition: 0.2s;

  border: none;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 24px;
    height: 24px;

    ${({ iconColor }) =>
      iconColor === 'purple' &&
      css`
        color: ${(props) => props.theme.colors.purple100};
      `}
    ${({ iconColor }) =>
      iconColor === 'green' &&
      css`
        color: ${(props) => props.theme.colors.green100};
      `}
  }

  &:not(:disabled):hover {
    background: ${(props) => props.theme.colors.gray500};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`
