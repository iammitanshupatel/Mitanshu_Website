import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
        <Html lang="en">
            <Head />
            <body data-spy="scroll" data-target="#navbarYagnesh" data-offset="98">
                <Main />
                <NextScript />
            </body>
        </Html>
    )
  }
}