import usePortfolio from '../hooks/usePortfolio';
import ProjectPageContent from '../component/ProjectPageContent';
import Head from 'next/head';

const WorkPage = () => {
  const { data } = usePortfolio();
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
