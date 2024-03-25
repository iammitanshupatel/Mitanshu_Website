/* eslint-disable react/display-name */
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
  return <>{data && <ProjectPageContent data={data?.data} />}</>;
};

export default WorkPage;
