import Link from 'next/link'
import styled, { css } from 'styled-components'

interface LinkProps {
  side: 'left' | 'right'
  variantColor: 'white' | 'purple'
}

export const Container = styled(Link)<LinkProps>`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 1rem;
  gap: 0.5rem;
  text-decoration: none;
  padding: 0.5rem 0.75rem;
  border-radius: 4px;
  transition: 0.2s;
  background: transparent;
  border: none;

  svg {
    width: 20px;
    height: 20px;
  }

  ${({ side }) =>
    side === 'left' &&
    css`
      flex-direction: row-reverse;
    `}

  ${({ side }) =>
    side === 'right' &&
    css`
      flex-direction: row;
    `}

  ${({ variantColor }) =>
    variantColor === 'white' &&
    css`
      color: ${(props) => props.theme.colors.gray200};

      &:hover {
        background: '#E6E8F20A';
        cursor: pointer;
      }
    `}

  ${({ variantColor }) =>
    variantColor === 'purple' &&
    css`
      color: ${(props) => props.theme.colors.purple100};

      &:hover {
        background: '#8381D90F';
        cursor: pointer;
      }
    `}
`
