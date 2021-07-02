import usePortfolio from '../hooks/usePortfolio';
import ProjectPageContent from '../component/ProjectPageContent';

const WorkPage = () => {
  const { data } = usePortfolio();
  return <>{data && <ProjectPageContent data={data} />}</>;
};

export default WorkPage;
