import 'tailwindcss/tailwind.css'
import type { ReactElement, ReactNode } from 'react'
import type { AppProps } from 'next/app'
import type { NextPage } from 'next'
import MainLayout from '../components/layouts/Main'
import DefaultLayout from '../components/layouts/Default'

type NextPageWithLayout = NextPage & {
  Layout?: (page: ReactElement) => ReactElement
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.Layout || ((page) => page)
  // return getLayout(<Component {...pageProps} />)
  return (
    <MainLayout>
      {/* <Layout>
        <Component {...pageProps} />
      </Layout> */}
      {getLayout(<Component {...pageProps} />)}
    </MainLayout>
  )
}

export default MyApp
