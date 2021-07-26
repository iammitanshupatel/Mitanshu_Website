import useAbout from '../hooks/useAbout';
import useEducationSkills from '../hooks/useEducationSkills';
import FullImageHeaderPage from '../component/FullImageHeaderPage';
import AboutPageContent from '../component/AboutPageContent';
import Head from 'next/head';
import PreLoader from '../component/PreLoader';

const AboutPage = () => {
  const { data: aboutData, isLoading: aboutLoading, isError: aboutError } = useAbout();
  const {
    data: educationSkillsData,
    isLoading: educationSkillsLoading,
    isError: educationSkillsError,
  } = useEducationSkills();
  if ((aboutLoading, educationSkillsLoading)) return <PreLoader />;
  if ((aboutError, educationSkillsError)) return <h1>Error</h1>;
  return (
    <>
      <Head>
        <title>About Page</title>
      </Head>
      {aboutData && <FullImageHeaderPage data={aboutData} />}
      {educationSkillsData && <AboutPageContent data={educationSkillsData} />}
    </>
  );
};

export default AboutPage;
