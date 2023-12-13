import Image from 'next/image'
import styled, { css } from 'styled-components'
interface AvatarProps {
  size: 'sm' | 'md' | 'lg'
}

export const Container = styled.div<AvatarProps>`
  border-radius: 999999px;
  background: linear-gradient(180deg, #7fd1cc 0%, #9694f5 100%);
  padding: 1px;

  ${({ size }) =>
    size === 'sm' &&
    css`
      width: 32px;
      min-width: 32px;
      height: 32px;
    `}

  ${({ size }) =>
    size === 'md' &&
    css`
      width: 40px;
      min-width: 40px;
      height: 40px;
    `}

  ${({ size }) =>
    size === 'lg' &&
    css`
      width: 72px;
      min-width: 72px;
      height: 72px;
    `}
`
export const AvatarImage = styled(Image)`
  border-radius: 99999px;
  object-fit: cover;
  width: 100%;
  height: 100%;
`
