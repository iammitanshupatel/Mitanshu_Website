import ErrorPage from 'container/ErrorPage';
import Head from 'next/head';

const Error500 = () => {
  return (
    <>
      <Head>
        <title> Server-side Error - Mitanshu Patel</title>
      </Head>
      <ErrorPage
        code={500}
        title="Looks like something is wrong with the server"
        description="Please try again after sometime..."
      />
    </>
  );
};

export default Error500;
