import type { AppProps } from 'next/app'
import  Head  from 'next/head';
import GlobalStyle from '../styles/globals';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Vending machine web3</title>
        <meta name="description" content="A simple vending machine web3" />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};
