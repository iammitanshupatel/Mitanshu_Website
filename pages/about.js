/* eslint-disable react/display-name */
import dynamic from 'next/dynamic';
import useAbout from 'hooks/useAbout';
import useEducationSkills from 'hooks/useEducationSkills';
import Head from 'next/head';
import Error500 from './500';
const PreLoader = dynamic(() => import('component/PreLoader'));
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
  if (aboutLoading || educationSkillsLoading) return <PreLoader />;
  if (aboutError || educationSkillsError) return <Error500 />;
  return (
    <>
      <Head>
        <title>About Page - Mitanshu Patel</title>
        <meta name="description" content="So, Who Am I?" key="desc" />
      </Head>
      {aboutData && <FullImageHeaderPage data={aboutData?.data} />}
      {educationSkillsData && <AboutPageContent data={educationSkillsData?.data} />}
    </>
  );
};

export default AboutPage;
