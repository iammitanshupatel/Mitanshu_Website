/* eslint-disable react/display-name */
import Head from 'next/head';
import dynamic from 'next/dynamic';
import usePortfolio from 'hooks/usePortfolio';
import PreLoader from 'component/PreLoader';
import Error500 from './500';
import fetchMeta from 'component/meta';

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
        {fetchMeta({
          title: 'Work Page - Mitanshu Patel',
          keywords: data?.data?.projects?.map(skill => skill?.title)?.join(', '),
          description: data?.data?.projectPageHeader,
        })}
      </Head>
      {data && <ProjectPageContent data={data?.data} />}
    </>
  );
};

export default WorkPage;
