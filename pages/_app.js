import dynamic from 'next/dynamic';
import { SWRConfig } from 'swr';
import 'styles/globals.scss';
import fetcher from 'lib/fetch';

const Layout = dynamic(() => import('container/Layout'));

const MyApp = ({ Component, pageProps }) => {
  const swrConfig = {
    fetcher,
  };

  return (
    <SWRConfig value={swrConfig}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SWRConfig>
  );
};

export default MyApp;
