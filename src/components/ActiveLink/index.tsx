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

  const isactive = href === asPath

  return (
    <NavLink isactive={isactive} href={href}>
      {isactive && <Brick />}
      {children}
    </NavLink>
  )
}
