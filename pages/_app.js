import { SWRConfig } from 'swr';
import Layout from '../container/Layout';
import '../styles/globals.scss';
import fetcher from '../lib/fetch';

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
