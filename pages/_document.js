import Document, { Html, Head, Main, NextScript } from 'next/document';
import Meta from 'component/meta';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <Meta />
        </Head>
        <Main />
        <NextScript />
      </Html>
    );
  }
}
