import dynamic from 'next/dynamic';
import { SWRConfig } from 'swr';
import 'styles/globals.scss';
import fetcher from 'lib/fetch';

const Layout = dynamic(() => import('container/Layout'));

const MyApp = ({ Component, pageProps }) => {
  const swrConfig = {
    fetcher,
  };

  const viewportMeta = {
    name: 'viewport',
    content:
      'minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover',
  };

  return (
    <SWRConfig value={swrConfig}>
      <meta {...viewportMeta} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SWRConfig>
  );
};

export default MyApp;
