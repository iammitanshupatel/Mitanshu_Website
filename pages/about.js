/* eslint-disable react/display-name */
import dynamic from 'next/dynamic';
import useAbout from 'hooks/useAbout';
import useEducationSkills from 'hooks/useEducationSkills';
import PreLoader from 'component/PreLoader';
import Error500 from './500';
import Head from 'next/head';
import fetchMeta from 'component/meta';

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
      <Head>
        {fetchMeta({
          title: 'About Page - Mitanshu Patel',
          keywords: educationSkillsData?.data?.skills?.map(skill => skill?.title)?.join(', '),
          description: aboutData?.data?.adminName,
        })}
      </Head>
      {aboutData && <FullImageHeaderPage data={aboutData?.data} />}
      {educationSkillsData && <AboutPageContent data={educationSkillsData?.data} />}
    </>
  );
};

export default AboutPage;
