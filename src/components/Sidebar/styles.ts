import styled from 'styled-components'
import Link from 'next/link'

export const Container = styled.aside`
  background-color: ${(props) => props.theme.colors.gray700};

  position: fixed;
  top: ${(props) => props.theme.size.xl};
  left: ${(props) => props.theme.size.xl};
  bottom: ${(props) => props.theme.size.xl};

  border-radius: 12px;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 2.5rem 3.25rem;
`

export const LogoContainer = styled.div`
  img {
    width: 8rem;
    height: 2rem;
  }
`
export const NavLink = styled(Link)`
  display: flex;
  align-items: center;

  gap: 0.75rem;

  text-decoration: none;

  color: ${(props) => props.theme.colors.gray100};
`
