import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import MainLayout from '../components/layouts/Main'
import DefaultLayout from '../components/layouts/Default'

function MyApp({ Component, pageProps }: AppProps) {
  const Layout = Component.Layout || DefaultLayout;
  console.log("Layout", Layout)
  return (
    <MainLayout>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MainLayout>
  )
}

export default MyApp
