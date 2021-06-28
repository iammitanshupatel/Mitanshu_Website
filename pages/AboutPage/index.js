import useAbout from '../../hooks/useAbout';
import FullImageHeaderPage from '../../component/FullImageHeaderPage';
import AboutPageContent from '../../component/AboutPageContent';

const AboutPage = () => {
  const { data } = useAbout();
  return (
    <>
      {data && <FullImageHeaderPage data={data} />}
      {data && <AboutPageContent data={data} />}
    </>
  );
};

export default AboutPage;
