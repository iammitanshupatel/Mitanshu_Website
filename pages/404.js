import ErrorPage from 'container/ErrorPage';
import Head from 'next/head';

const Error404 = () => {
  return (
    <>
      <Head>
        <title> Page Not Found - Mitanshu Patel</title>
      </Head>
      <ErrorPage />
    </>
  );
};

export default Error404;
