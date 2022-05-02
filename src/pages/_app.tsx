import type { AppProps } from 'next/app'

import { ServerDataProvider } from '../ServerDataProvider'

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ServerDataProvider serverProps={pageProps}>
      <Component {...pageProps} />
    </ServerDataProvider>
  )
}

export default MyApp
