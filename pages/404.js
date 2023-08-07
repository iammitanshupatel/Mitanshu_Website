import ErrorPage from 'container/ErrorPage';
import Head from 'next/head';

const Error404 = () => {
  const pageTitle = 'Page Not Found - Mitanshu Patel';
  const errorCode = 404;
  const errorTitle = 'Looks like you are lost';
  const errorDescription = 'The page you were trying to view does not exist.';

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <ErrorPage code={errorCode} title={errorTitle} description={errorDescription} />
    </>
  );
};

export default Error404;
