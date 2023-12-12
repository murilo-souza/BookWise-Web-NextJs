import Link from 'next/link'
import styled, { css } from 'styled-components'

interface StyledLinkProps {
  isactive: boolean
}

export const Container = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const NavItemContainer = styled(Link)<StyledLinkProps>`
  text-decoration: none;
  display: flex;
  align-items: center;

  transition: 0.2s;

  svg {
    margin-right: 0.75rem;
  }

  &:hover {
    color: ${(props) => props.theme.colors.gray100};
  }

  ${({ isactive }) =>
    isactive === true &&
    css`
      color: ${(props) => props.theme.colors.gray100};
      font-weight: bold;

      &::before {
        content: '';
        width: 4px;
        height: 24px;
        background: linear-gradient(180deg, #7fd1cc 0%, #9694f5 100%);
        margin-right: 1rem;
        border-radius: 9999999px;
        transition: 0.2s;
        opacity: 1;
      }
    `}

  ${({ isactive }) =>
    isactive === false &&
    css`
      color: ${(props) => props.theme.colors.gray400};

      &::before {
        content: '';
        width: 4px;
        height: 24px;
        background: linear-gradient(180deg, #7fd1cc 0%, #9694f5 100%);
        margin-right: 1rem;
        border-radius: 9999999px;
        transition: 0.2s;
        opacity: 0;
      }
    `}
`
