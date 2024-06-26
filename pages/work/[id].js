import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import useProjects from 'hooks/useProjects';
import common from 'styles/common.module.scss';
import PreLoader from 'component/PreLoader';
import Error500 from 'pages/500';

const SingleProjectContent = dynamic(() => import('component/SingleProjectContent'), {
  loading: () => <PreLoader />,
  ssr: false,
});

const SinglePortfolio = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading, isError } = useProjects(id);

  if (isLoading) return <PreLoader />;
  if (isError) return <Error500 />;

  return (
    <div className={common.srvContainer}>{data && <SingleProjectContent data={data.data} />}</div>
  );
};

export default SinglePortfolio;
