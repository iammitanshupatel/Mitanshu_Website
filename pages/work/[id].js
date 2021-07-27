import { useRouter } from 'next/router';
import useProjects from '../../hooks/useProjects';
import SingleProjectContent from '../../component/SingleProjectContent';
import common from '../../styles/common.module.scss';
import PreLoader from '../../component/PreLoader';

const SinglePortfolio = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading, isError } = useProjects(id);
  if (isLoading) return <PreLoader />;
  //   if (isError) return <h1>Error</h1>;
  return <div className={common.srvContainer}>{data && <SingleProjectContent data={data} />}</div>;
};

export default SinglePortfolio;
