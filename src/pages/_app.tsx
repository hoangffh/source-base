/* eslint-disable import/no-unused-modules */
import '../styles/globals.css'
import '../styles/globals.scss'
import '../styles/common.scss'

import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { NextPageWithLayout } from '@src/interfaces'
import { ThemeProvider } from '@material-tailwind/react'
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

// Modal.setAppElement('#yourAppElement')

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: { refetchOnWindowFocus: false },
  },
})

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>{getLayout(<Component {...pageProps} />)}</ThemeProvider>
    </QueryClientProvider>
  )
}

export default appWithTranslation(MyApp)
// export default MyApp
