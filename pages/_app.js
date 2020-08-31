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
    return (
      <>
        <Head />
        {mounted && (
          <>
            <Nav />
            <main>
              <Component {...pageProps} />
            </main>
            <Footer />
          </>
        )}
      </>
    );
  }
}

export default MyApp;
