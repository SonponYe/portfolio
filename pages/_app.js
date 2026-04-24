import '../styles/globals.css'
import { ParallaxProvider } from 'react-scroll-parallax'
import HackerBackdrop from '../components/HackerBackdrop'

export default function App({ Component, pageProps }){
  return (
    <ParallaxProvider>
      <div className="hacker-shell min-h-full relative">
        <HackerBackdrop />
        <Component {...pageProps} />
      </div>
    </ParallaxProvider>
  )
}
