import useAbout from '../hooks/useAbout';
import useEducationSkills from '../hooks/useEducationSkills';
import FullImageHeaderPage from '../component/FullImageHeaderPage';
import AboutPageContent from '../component/AboutPageContent';
import Head from 'next/head';

const AboutPage = () => {
  const { data: aboutData } = useAbout();
  const { data: educationSkillsData } = useEducationSkills();
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
