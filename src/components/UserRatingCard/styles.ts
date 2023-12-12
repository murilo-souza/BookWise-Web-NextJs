import styled, { css } from 'styled-components'

interface UserRatingCardProps {
  variant: 'primary' | 'highlight'
}

export const Container = styled.div<UserRatingCardProps>`
  padding: 1.5rem;
  border-radius: 8px;

  ${({ variant }) =>
    variant === 'primary' &&
    css`
      background: ${(props) => props.theme.colors.gray700};
    `}

  ${({ variant }) =>
    variant === 'highlight' &&
    css`
      background: ${(props) => props.theme.colors.gray600};
    `}
`

export const UserDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.25rem;

  > section {
    display: flex;
    gap: 1rem;
  }
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

export const Description = styled.p`
  font-size: 0.875rem;
  font-weight: 400;

  color: ${(props) => props.theme.colors.gray300};

  margin-top: 1rem;
`
