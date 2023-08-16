import { useRouter } from 'next/router'
import { ReactNode } from 'react'
import { NavLink } from './styles'
import { Brick } from '../Brick'

interface ActiveLinkProps {
  children: ReactNode
  href: string
}

export function ActiveLink({ children, href }: ActiveLinkProps) {
  const { asPath } = useRouter()

  const isActive = href === asPath

  return (
    <NavLink isActive={isActive} href={href}>
      {isActive && <Brick />}
      {children}
    </NavLink>
  )
}
