import { useState, useEffect } from 'react'
import App from 'next/app'
import splitbee from '@splitbee/web'

import '../css/base.css'
import Store from '../store'

import Head from '../components/Head'
import Wrapper from '../components/Wrapper'

export default function MyApp({ Component, pageProps }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    if (process.env.NODE_ENV === 'production') {
      splitbee.init({
        token: 'IUOZY01RM0F4',
        disableCookie: true,
      })
    }
  }, [])

  return (
    <Store>
      <Head />
      {mounted && (
        <Wrapper>
          <Component {...pageProps} />
        </Wrapper>
      )}
    </Store>
  )
}
