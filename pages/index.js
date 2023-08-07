/* eslint-disable react/display-name */
import dynamic from 'next/dynamic';
import Head from 'next/head';
import useBanner from 'hooks/useBanner';
import useAbout from 'hooks/useAbout';
import useServices from 'hooks/useServices';
import usePortfolio from 'hooks/usePortfolio';
import useEducationSkills from 'hooks/useEducationSkills';
import useBlog from 'hooks/useBlog';
import PreLoader from 'component/PreLoader';
import Error500 from './500';

const dynamicImport = importFunc => dynamic(importFunc, { loading: () => <PreLoader /> });

const Home = dynamicImport(() => import('container/Home'));
const About = dynamicImport(() => import('container/About'));
const Services = dynamicImport(() => import('container/Services'));
const Projects = dynamicImport(() => import('container/Projects'));
const Education = dynamicImport(() => import('container/Education'));
const Blogs = dynamicImport(() => import('container/Blogs'));
// const Testimonial = dynamicImport(() => import('container/Testimonial'));

const Main = () => {
  const { data: bannerData, isLoading: bannerLoading, isError: bannerError } = useBanner();
  const { data: aboutData, isLoading: aboutLoading, isError: aboutError } = useAbout();
  const { data: serviceData, isLoading: serviceLoading, isError: serviceError } = useServices();
  const { data: portfolioData, isError: portfolioError } = usePortfolio();
  const { data: educationSkillsData, isError: educationSkillsError } = useEducationSkills();
  const { data: blogData, isError: blogError } = useBlog();
  //   const { data: testimonialData, isError: testimonialError } = useTestimonial();

  if (bannerLoading || aboutLoading || serviceLoading) return <PreLoader />;
  if (
    bannerError ||
    aboutError ||
    serviceError ||
    portfolioError ||
    educationSkillsError ||
    blogError
  )
    return <Error500 />;

  return (
    <>
      <Head>
        <title>Mitanshu Patel</title>
      </Head>
      {bannerData && <Home data={bannerData?.data} />}
      {aboutData && <About data={aboutData?.data} />}
      {serviceData && <Services data={serviceData?.data} />}
      {portfolioData && <Projects data={portfolioData?.data} />}
      {educationSkillsData && <Education data={educationSkillsData?.data} />}
      {blogData && <Blogs data={blogData?.data} />}
      {/* {testimonialData && <Testimonial data={testimonialData} />} */}
    </>
  );
};

export default Main;
