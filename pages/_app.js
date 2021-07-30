import dynamic from 'next/dynamic';
import { SWRConfig } from 'swr';
import '../styles/globals.scss';
import fetcher from '../lib/fetch';
const Layout = dynamic(() => import('../container/Layout'));

function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig
      value={{
        fetcher,
      }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SWRConfig>
  );
}

export default MyApp;
