import styled from 'styled-components'
import * as Avatar from '@radix-ui/react-avatar'

export const AvatarContainer = styled.div`
  display: flex;
  gap: 1rem;

  align-items: center;
`

export const AvatarRoot = styled(Avatar.Root)``

export const AvatarImage = styled(Avatar.Image)`
  width: 2.5rem;
  height: 2.5rem;

  border-radius: 999999px;
  border: 1px solid ${(props) => props.theme.colors.purple100};
`

export const AvatarFallback = styled(Avatar.Fallback)`
  width: 2.5rem;
  height: 2.5rem;

  border-radius: 999999px;

  background-color: ${(props) => props.theme.colors.gray800};

  color: ${(props) => props.theme.colors.gray100};
`

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.5rem;
`

export const ProfileName = styled.p`
  color: ${(props) => props.theme.colors.gray100};

  font-size: ${(props) => props.theme.size.md};
  font-weight: 400;
`

export const Time = styled.span`
  color: ${(props) => props.theme.colors.gray400};

  font-size: ${(props) => props.theme.size.sm};
  font-weight: 400;
`
