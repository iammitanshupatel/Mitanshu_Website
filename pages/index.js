/* eslint-disable react/display-name */
import dynamic from 'next/dynamic';
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
  const { data: bannerData, isLoading, isError } = useBanner();
  const { data: aboutData } = useAbout();
  const { data: serviceData } = useServices();
  const { data: portfolioData } = usePortfolio();
  const { data: educationSkillsData } = useEducationSkills();
  const { data: blogData } = useBlog();
  //   const { data: testimonialData, isError: testimonialError } = useTestimonial();

  if (isLoading) return <PreLoader />;
  if (isError) return <Error500 />;

  return (
    <>
      <Home data={bannerData?.data} />
      <About data={aboutData?.data} />
      <Services data={serviceData?.data} />
      {portfolioData && <Projects data={portfolioData?.data} />}
      {educationSkillsData && <Education data={educationSkillsData?.data} />}
      {blogData && <Blogs data={blogData?.data} />}
      {/* {testimonialData && <Testimonial data={testimonialData} />} */}
    </>
  );
};

export default Main;
