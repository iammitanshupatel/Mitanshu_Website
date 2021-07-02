import useAbout from '../hooks/useAbout';
import useEducationSkills from '../hooks/useEducationSkills';
import FullImageHeaderPage from '../component/FullImageHeaderPage';
import AboutPageContent from '../component/AboutPageContent';

const AboutPage = () => {
  const { data: aboutData } = useAbout();
  const { data: educationSkillsData } = useEducationSkills();
  return (
    <>
      {aboutData && <FullImageHeaderPage data={aboutData} />}
      {educationSkillsData && <AboutPageContent data={educationSkillsData} />}
    </>
  );
};

export default AboutPage;
