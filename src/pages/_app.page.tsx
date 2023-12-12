import { queryClient } from '@/lib/react-query'
import { GlobalStyles } from '@/styles/global'
import { theme } from '@/styles/theme'
import { QueryClientProvider } from '@tanstack/react-query'
import { NextPage } from 'next'
import { SessionProvider } from 'next-auth/react'
import { AppProps } from 'next/app'
import { ReactElement, ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'

// eslint-disable-next-line @typescript-eslint/ban-types
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={session}>
        <ThemeProvider theme={theme}>
          {getLayout(<Component {...pageProps} />)}
          <GlobalStyles />
        </ThemeProvider>
      </SessionProvider>
    </QueryClientProvider>
  )
}
