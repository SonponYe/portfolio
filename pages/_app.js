import '../styles/globals.css'
import { ParallaxProvider } from 'react-scroll-parallax'

export default function App({ Component, pageProps }){
  return (
    <ParallaxProvider>
      <div className="homepage-json min-h-full relative" style={{ backgroundColor: '#0a0e27' }}>
        <Component {...pageProps} />
      </div>
    </ParallaxProvider>
  )
}
