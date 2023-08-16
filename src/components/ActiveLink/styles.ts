import Link from 'next/link'
import styled, { css } from 'styled-components'

interface StyledLinkProps {
  isActive: boolean
}

export const NavLink = styled(Link)<StyledLinkProps>`
  margin-bottom: 1.75rem;

  display: flex;
  align-items: center;

  gap: 0.75rem;

  text-decoration: none;

  color: ${(props) => props.theme.colors.gray400};

  font-size: 1rem;

  svg {
    margin-left: 1rem;
  }

  padding: 0.25rem;

  &:hover {
    background: rgba(230, 232, 242, 0.04);

    border-radius: 4px;
  }

  ${({ isActive }) =>
    isActive &&
    css`
      color: ${(props) => props.theme.colors.gray100};
      font-weight: bold;
    `}
`
