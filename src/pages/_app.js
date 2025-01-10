// _app.js
import '@/styles/globals.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        
        <title>Theo Maurino</title>

        <link rel='icon' href='/vectors/tm.svg' />

      </Head>
      <Component {...pageProps} />
    </>
  );
}
