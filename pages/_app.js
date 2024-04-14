import dynamic from 'next/dynamic';
import { SWRConfig } from 'swr';
import 'styles/globals.scss';
import fetcher from 'lib/fetch';
import { DefaultSeo } from 'next-seo';

const Layout = dynamic(() => import('container/Layout'));

const MyApp = ({ Component, pageProps }) => {
  const swrConfig = {
    fetcher,
  };

  return (
    <SWRConfig value={swrConfig}>
      <Layout>
        <DefaultSeo
          themeColor="#000000"
          defaultTitle="Mitanshu Patel | Full-Stack Developer"
          description="Passionate Software Engineer with over 3 years in building modern web and mobile applications using React, Node.js, and React Native. Certified in CSS, JavaScript, React, and REST APIs."
          openGraph={{
            url: 'https://mitanshupatel.com/',
            type: 'website',
            title: 'Mitanshu Patel | Full-Stack Developer',
            description:
              'Passionate Software Engineer with over 3 years in building modern web and mobile applications using React, Node.js, and React Native. Certified in CSS, JavaScript, React, and REST APIs.',
          }}
          additionalMetaTags={[
            {
              name: 'viewport',
              content:
                'minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover',
            },
            {
              charSet: 'UTF-8',
            },
            { httpEquiv: 'X-UA-Compatible', content: 'IE=edge' },
            { name: 'language', content: 'EN' },
            { name: 'author', content: 'Mitanshu Patel' },
          ]}
          canonical="https://mitanshupatel.com/"
          openGraph={{
            type: 'website',
            url: 'https://mitanshupatel.com/',
            images: [{ url: 'https://mitanshupatel.com/manifest-icon-192.png' }],
          }}
          twitter={{
            cardType: 'summary_large_image',
            site: '@mitanshu_patel_',
          }}
          additionalLinkTags={[
            {
              rel: 'shortcut icon',
              href: '/manifest-icon-192.png',
            },
            {
              rel: 'icon',
              type: 'image/png',
              href: '/static/icons/favicon-32x32.png',
              sizes: '32x32',
            },
            {
              rel: 'icon',
              type: 'image/png',
              href: '/static/icons/favicon-16x16.png',
              sizes: '16x16',
            },
            {
              rel: 'manifest',
              href: '/manifest.json',
            },
            {
              rel: 'apple-touch-icon',
              href: '/manifest-icon-192.png',
            },
            {
              rel: 'apple-touch-startup-image',
              href: '/apple-splash-2048-2732.png',
              sizes: '2048x2732',
            },
            {
              rel: 'apple-touch-startup-image',
              href: '/apple-splash-1668-2224.png',
              sizes: '1668x2224',
            },
            {
              rel: 'apple-touch-startup-image',
              href: '/apple-splash-1536-2048.png',
              sizes: '1536x2048',
            },
            {
              rel: 'apple-touch-startup-image',
              href: '/static/images/apple-splash-1125-2436.png',
              sizes: '1125x2436',
            },
            {
              rel: 'apple-touch-startup-image',
              href: '/static/images/apple-splash-1242-2208.png',
              sizes: '1242x2208',
            },
            {
              rel: 'apple-touch-startup-image',
              href: '/static/images/apple-splash-750-1334.png',
              sizes: '750x1334',
            },
            {
              rel: 'apple-touch-startup-image',
              href: '/static/images/apple-splash-640-1336.png',
              sizes: '640x1136',
            },
          ]}
        />
        <Component {...pageProps} />
      </Layout>
    </SWRConfig>
  );
};

export default MyApp;
