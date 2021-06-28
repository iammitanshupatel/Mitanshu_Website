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

const Main = () => {
  const { data: bannerData } = useBanner();
  const { data: aboutData } = useAbout();
  const { data: serviceData } = useServices();
  const { data: portfolioData } = usePortfolio();
  const { data: educationSkillsData } = useEducationSkills();
  return (
    <>
      {bannerData && <Home data={bannerData} />}
      {aboutData && <About data={aboutData} />}
      {serviceData && <Services data={serviceData} />}
      {portfolioData && <Projects data={portfolioData} />}
      {educationSkillsData && <Education data={educationSkillsData} />}
      <Blogs />
      <Testimonial />
    </>
  );
};

export default Main;
