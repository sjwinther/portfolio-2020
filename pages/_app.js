import App from 'next/app'
import splitbee from '@splitbee/web'

import '../css/base.css'
import Store from '../store'

import Head from '../components/Head'
import Wrapper from '../components/Wrapper'

class MyApp extends App {
  state = {}
  componentDidMount() {
    this.setState({ mounted: true })
    if (process.env.NODE_ENV === 'production') {
      splitbee.init({
        token: 'IUOZY01RM0F4',
        disableCookie: true,
      })
    }
  }
  render() {
    const { Component, pageProps } = this.props
    const { mounted } = this.state
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
}

export default MyApp
