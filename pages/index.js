/* eslint-disable react/display-name */
import dynamic from 'next/dynamic';
import Head from 'next/head';
// import Cursor from '../component/Cursor';
import useBanner from '../hooks/useBanner';
import useAbout from '../hooks/useAbout';
import useServices from '../hooks/useServices';
import usePortfolio from '../hooks/usePortfolio';
import useEducationSkills from '../hooks/useEducationSkills';
import useBlog from '../hooks/useBlog';
import useTestimonial from '../hooks/useTestimonial';
import PreLoader from '../component/PreLoader';
const Home = dynamic(() => import('../container/Home'), {
  loading: () => <PreLoader />,
});
const About = dynamic(() => import('../container/About'), {
  loading: () => <PreLoader />,
});
const Services = dynamic(() => import('../container/Services'), {
  loading: () => <PreLoader />,
});
const Projects = dynamic(() => import('../container/Projects'));
const Education = dynamic(() => import('../container/Education'));
const Blogs = dynamic(() => import('../container/Blogs'));
const Testimonial = dynamic(() => import('../container/Testimonial'));

const Main = () => {
  const { data: bannerData, isLoading: bannerLoading, isError: bannerError } = useBanner();
  const { data: aboutData, isError: aboutError } = useAbout();
  const { data: serviceData, isError: serviceError } = useServices();
  const { data: portfolioData, isError: portfolioError } = usePortfolio();
  const { data: educationSkillsData, isError: educationSkillsError } = useEducationSkills();
  const { data: blogData, isError: blogError } = useBlog();
  //   const { data: testimonialData, isError: testimonialError } = useTestimonial();
  if (bannerLoading) return <PreLoader />;
  //   if ((bannerError, aboutError, serviceError, portfolioError, educationSkillsError))
  //     return <h1>Error</h1>;
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      {bannerData && <Home data={bannerData} />}
      {aboutData && <About data={aboutData} />}
      {serviceData && <Services data={serviceData} />}
      {portfolioData && <Projects data={portfolioData} />}
      {educationSkillsData && <Education data={educationSkillsData} />}
      {blogData && <Blogs data={blogData} />}
      {/* {testimonialData && <Testimonial data={testimonialData} />} */}
    </>
  );
};

export default Main;
