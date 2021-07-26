import Cursor from '../component/Cursor';
import About from '../container/About';
import Education from '../container/Education';
import Home from '../container/Home';
import Services from '../container/Services';
import Projects from '../container/Projects';
import Blogs from '../container/Blogs';
import Testimonial from '../container/Testimonial';
import useBanner from '../hooks/useBanner';
import useAbout from '../hooks/useAbout';
import useServices from '../hooks/useServices';
import usePortfolio from '../hooks/usePortfolio';
import useEducationSkills from '../hooks/useEducationSkills';
import useBlog from '../hooks/useBlog';
import useTestimonial from '../hooks/useTestimonial';
import Head from 'next/head';
import PreLoader from '../component/PreLoader';

const Main = () => {
  const { data: bannerData, isLoading: bannerLoading, isError: bannerError } = useBanner();
  const { data: aboutData, isError: aboutError } = useAbout();
  const { data: serviceData, isError: serviceError } = useServices();
  const { data: portfolioData, isError: portfolioError } = usePortfolio();
  const { data: educationSkillsData, isError: educationSkillsError } = useEducationSkills();
  const { data: blogData, isError: blogError } = useBlog();
  const { data: testimonialData, isError: testimonialError } = useTestimonial();
  if (bannerLoading) return <PreLoader />;
  if ((bannerError, aboutError, serviceError, portfolioError, educationSkillsError))
    return <h1>Error</h1>;
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
      {testimonialData && <Testimonial data={testimonialData} />}
    </>
  );
};

export default Main;
