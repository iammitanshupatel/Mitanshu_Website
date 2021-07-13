import { useRouter } from 'next/router';
import useProjects from '../../hooks/useProjects';
import SingleProjectContent from '../../component/SingleProjectContent';
import common from '../../common-styles/common.module.scss';

const SinglePortfolio = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data } = useProjects(id);
  return <div className={common.srvContainer}>{data && <SingleProjectContent data={data} />}</div>;
};

export default SinglePortfolio;
