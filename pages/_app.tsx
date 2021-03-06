import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'
import NextNProgress from "nextjs-progressbar";


function MyApp({ Component, pageProps }: AppProps) {
  return <>
  <NextNProgress 
    color="#29D"
    startPosition={0.3}
    stopDelayMs={200}
    height={3}
    showOnShallow={true}
  />
  <Navbar />
  <Component {...pageProps} />
  </>
}

export default MyApp
