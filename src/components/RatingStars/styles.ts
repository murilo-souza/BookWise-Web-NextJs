import styled, { css } from 'styled-components'

interface RatingStarsProps {
  size: 'sm' | 'md' | 'lg'
}

export const Container = styled.div<RatingStarsProps>`
  display: flex;
  align-items: center;

  svg {
    color: ${(props) => props.theme.colors.purple100};
    box-sizing: content-box;

    &:first-child {
      padding-left: 0;
    }

    ${({ size }) =>
      size === 'sm' &&
      css`
        padding: 0 2px;
        width: 14px;
        height: 14px;
      `}

    ${({ size }) =>
      size === 'md' &&
      css`
        padding: 0 3px;
        width: 20px;
        height: 20px;
      `}
  
    ${({ size }) =>
      size === 'lg' &&
      css`
        padding: 0 2px;
        width: 24px;
        height: 24px;
      `}
  }
`
