import Document, { Html, Head, Main, NextScript } from 'next/document';
import Meta from 'component/meta';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <Meta />
          {/* Any additional meta tags or head elements can be added here */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
