/* eslint-disable react/display-name */
import Head from 'next/head';
import dynamic from 'next/dynamic';
import usePortfolio from 'hooks/usePortfolio';
import PreLoader from 'component/PreLoader';
const ProjectPageContent = dynamic(() => import('component/ProjectPageContent'), {
  loading: () => <PreLoader />,
});

const WorkPage = () => {
  const { data, isLoading, isError } = usePortfolio();
  if (isLoading) return <PreLoader />;
  //   if (isError) return <h1>Error</h1>;
  return (
    <>
      <Head>
        <title>Work Page - Mitanshu Patel</title>
      </Head>
      {data && <ProjectPageContent data={data} />}
    </>
  );
};

export default WorkPage;
