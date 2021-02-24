import "../styles/globals.scss";

import { AppProps } from "next/app";
import Header from "@module/Header/Header.module";
import Footer from "@module/Footer/Footer.module";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
