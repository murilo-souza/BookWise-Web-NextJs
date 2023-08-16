import { Sidebar } from '@/components/Sidebar'
import { GlobalStyles } from '@/styles/global'
import { theme } from '@/styles/theme'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Sidebar />
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  )
}
