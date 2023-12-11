import { ReactNode } from 'react'
import { Container, Content } from './styles'
import { Sidebar } from '@/components/Sidebar'
import Head from 'next/head'

type DefaultLayoutProps = {
  children: ReactNode
  title: string
}

export const DefaultLayout = ({ children, title }: DefaultLayoutProps) => {
  return (
    <Container>
      <Head>
        <title>{`${title} | BookWise`}</title>
      </Head>
      <Sidebar />
      <Content>{children}</Content>
    </Container>
  )
}
