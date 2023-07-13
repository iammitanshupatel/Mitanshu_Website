/* eslint-disable react/display-name */
import Head from 'next/head';
import dynamic from 'next/dynamic';
import usePortfolio from 'hooks/usePortfolio';
import PreLoader from 'component/PreLoader';
import Error500 from './500';
const ProjectPageContent = dynamic(() => import('component/ProjectPageContent'), {
  loading: () => <PreLoader />,
});

const WorkPage = () => {
  const { data, isLoading, isError } = usePortfolio();
  if (isLoading) return <PreLoader />;
  if (isError) return <Error500 />;
  return (
    <>
      <Head>
        <title>Work Page - Mitanshu Patel</title>
        <meta name="description" content="Projects I Have Worked On" key="desc" />
      </Head>
      {data && <ProjectPageContent data={data?.data} />}
    </>
  );
};

export default WorkPage;
