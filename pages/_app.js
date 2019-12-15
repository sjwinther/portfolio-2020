import ReactGA from "react-ga";
import App from "next/app";

import Head from "../components/Head";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

class MyApp extends App {
  state = {};
  componentDidMount() {
    this.setState({ mounted: true });
    process.env.NODE_ENV === "production" &&
      ReactGA.initialize("UA-55167950-1");
    process.env.NODE_ENV === "production" &&
      ReactGA.pageview(window.location.pathname + window.location.search);
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
