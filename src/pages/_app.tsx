import "../styles/globals.scss";

import { AppProps } from "next/app";
import Header from "@module/Header/Header.module";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
