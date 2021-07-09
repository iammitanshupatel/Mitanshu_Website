import { useRouter } from 'next/router';
import useProjects from '../../hooks/useProjects';
import SingleProjectContent from '../../component/SingleProjectContent';

const SinglePortfolio = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data } = useProjects(id);
  return <div className="srvContainer">{data && <SingleProjectContent data={data} />}</div>;
};

export default SinglePortfolio;
