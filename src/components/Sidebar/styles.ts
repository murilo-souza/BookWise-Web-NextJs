import Link from 'next/link'
import styled from 'styled-components'

export const Container = styled.aside`
  width: 234px;
  height: calc(100% - 40px);

  margin: 20px;

  background: ${(props) => props.theme.colors.gray700}
    url('/images/Background-sidebar.png') no-repeat center;
  background-size: cover;

  border-radius: 12px;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: space-between;

  padding-top: 40px;
  padding-bottom: 24px;
  overflow: hidden;
`

export const LogoContainer = styled.div`
  margin-bottom: 4rem;

  img {
    width: 8rem;
    height: 2rem;
  }
`

export const SignInButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  text-decoration: none;

  gap: 0.75rem;

  color: ${(props) => props.theme.colors.gray200};

  font-size: 1rem;

  cursor: pointer;

  padding: 0.25rem 0.5rem;

  &:hover {
    background: rgba(230, 232, 242, 0.04);

    border-radius: 4px;
  }

  svg {
    color: ${(props) => props.theme.colors.green100};
  }
`

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  svg {
    cursor: pointer;
  }
`
export const ProfileName = styled.p`
  max-width: 100px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
