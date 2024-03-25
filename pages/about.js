/* eslint-disable react/display-name */
import dynamic from 'next/dynamic';
import useAbout from 'hooks/useAbout';
import useEducationSkills from 'hooks/useEducationSkills';
import PreLoader from 'component/PreLoader';
import Error500 from './500';

const FullImageHeaderPage = dynamic(() => import('component/FullImageHeaderPage'), {
  loading: () => <PreLoader />,
});
const AboutPageContent = dynamic(() => import('component/AboutPageContent'), {
  loading: () => <PreLoader />,
});

const AboutPage = () => {
  const { data: aboutData, isLoading: aboutLoading, isError: aboutError } = useAbout();
  const {
    data: educationSkillsData,
    isLoading: educationSkillsLoading,
    isError: educationSkillsError,
  } = useEducationSkills();

  if (aboutLoading || educationSkillsLoading) {
    return <PreLoader />;
  }

  if (aboutError || educationSkillsError) {
    return <Error500 />;
  }

  return (
    <>
      {aboutData && <FullImageHeaderPage data={aboutData?.data} />}
      {educationSkillsData && <AboutPageContent data={educationSkillsData?.data} />}
    </>
  );
};

export default AboutPage;
