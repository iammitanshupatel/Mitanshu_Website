import dynamic from 'next/dynamic';
import { SWRConfig } from 'swr';
import 'styles/globals.scss';
import fetcher from 'lib/fetch';
const Layout = dynamic(() => import('container/Layout'));

function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig
      value={{
        fetcher,
      }}>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SWRConfig>
  );
}

export default MyApp;
