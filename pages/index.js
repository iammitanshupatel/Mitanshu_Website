import Cursor from '../component/Cursor';
import About from '../container/About';
import Education from '../container/Education';
import Home from '../container/Home';
import Services from '../container/Services';
import Projects from '../container/Projects';
import Blogs from '../container/Blogs';
import Testimonial from '../container/Testimonial';

const Main = () => (
  <>
    <Home />
    <About />
    <Services />
    <Projects />
    <Education />
    <Blogs />
    <Testimonial />
    {/* <ContactPage /> */}
    {/* <AboutPage /> */}
  </>
);

export default Main;
