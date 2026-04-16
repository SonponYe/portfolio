import '../styles/globals.css'
import { ParallaxProvider } from 'react-scroll-parallax'

export default function App({ Component, pageProps }){
  return (
    <ParallaxProvider>
      <div className="homepage-json min-h-full relative">
        <Component {...pageProps} />
      </div>
    </ParallaxProvider>
  )
}
