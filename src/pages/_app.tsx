import '@/styles/globals.css'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import type { ReactElement, ReactNode } from 'react'
import { SessionProvider } from "next-auth/react"
import Layout from '@/components/Layout/Layout'
import { Provider } from 'react-redux'
import { store } from '@/redux/store'
import { Toaster } from 'react-hot-toast';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps: { session, ...pageProps }, }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(<SessionProvider session={session}>

    <Toaster
      position="top-right"
      reverseOrder={false}
    />

    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>

  </SessionProvider>)
}