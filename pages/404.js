import ErrorPage from 'container/ErrorPage';
import Head from 'next/head';

const Error404 = () => {
  return (
    <>
      <Head>
        <title> Page Not Found - Mitanshu Patel</title>
      </Head>
      <ErrorPage
        code={404}
        title="Looks like you are lost"
        description="The page you were trying to view does not exist."
      />
    </>
  );
};

export default Error404;
