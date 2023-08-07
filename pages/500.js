import ErrorPage from 'container/ErrorPage';
import Head from 'next/head';

const Error500 = () => {
  const pageTitle = 'Server-side Error - Mitanshu Patel';
  const errorCode = 500;
  const errorTitle = 'Looks like something is wrong with the server';
  const errorDescription = 'Please try again after sometime...';

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <ErrorPage code={errorCode} title={errorTitle} description={errorDescription} />
    </>
  );
};

export default Error500;
