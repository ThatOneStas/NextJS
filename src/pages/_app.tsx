import '@/styles/globals.css'
import type { AppProps } from 'next/app'
// layout
import Layouts from '@/layouts'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layouts>
      <Component {...pageProps} />
    </Layouts>
  );
}
