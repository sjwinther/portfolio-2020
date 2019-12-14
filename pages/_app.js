import App from "next/app";

import Head from "../components/Head";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

class MyApp extends App {
  state = {};
  componentDidMount() {
    this.setState({ mounted: true });
  }
  render() {
    const { Component, pageProps } = this.props;
    const { mounted } = this.state;
    if (mounted)
      return (
        <>
          <Head />
          <Nav />
          <main>
            <Component {...pageProps} />
          </main>
          <Footer />
        </>
      );
    return null;
  }
}

export default MyApp;
