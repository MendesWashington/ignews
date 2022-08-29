import { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>ignews</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
