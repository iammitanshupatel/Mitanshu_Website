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

const Main = () => {
  const { data: bannerData } = useBanner();
  const { data: aboutData } = useAbout();
  const { data: serviceData } = useServices();
  const { data: portfolioData } = usePortfolio();
  const { data: educationSkillsData } = useEducationSkills();
  const { data: blogData } = useBlog();
  const { data: testimonialData } = useTestimonial();
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
