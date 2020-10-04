import App from 'next/app'
import ReactGA from 'react-ga'
import Store from '../store'

import Head from '../components/Head'
import Wrapper from '../components/Wrapper'

class MyApp extends App {
  state = {}
  componentDidMount() {
    this.setState({ mounted: true })
    process.env.NODE_ENV === 'production' && ReactGA.initialize('UA-55167950-1')
    process.env.NODE_ENV === 'production' &&
      ReactGA.pageview(window.location.pathname + window.location.search)
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
