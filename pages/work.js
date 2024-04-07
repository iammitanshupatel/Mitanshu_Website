/* eslint-disable react/display-name */
import dynamic from 'next/dynamic';
import { NextSeo } from 'next-seo';
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
      <NextSeo
        title="Mitanshu Patel's Work Portfolio"
        description="A showcase of projects Mitanshu Patel has worked on. Discover his skills and experience."
        openGraph={{
          url: 'https://mitanshupatel.com/work',
          title: "Mitanshu Patel's Work Portfolio",
          description:
            'A showcase of projects Mitanshu Patel has worked on. Discover his skills and experience.',
        }}
      />
      {data && <ProjectPageContent data={data?.data} />}
    </>
  );
};

export default WorkPage;
