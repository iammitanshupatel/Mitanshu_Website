import usePortfolio from '../hooks/usePortfolio';
import ProjectPageContent from '../component/ProjectPageContent';
import Head from 'next/head';
import PreLoader from '../component/PreLoader';

const WorkPage = () => {
  const { data, isLoading, isError } = usePortfolio();
  if (isLoading) return <PreLoader />;
  if (isError) return <h1>Error</h1>;
  return (
    <>
      <Head>
        <title>Work Page</title>
      </Head>
      {data && <ProjectPageContent data={data} />}
    </>
  );
};

export default WorkPage;
