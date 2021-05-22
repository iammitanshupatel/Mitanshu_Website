import Cursor from '../component/Cursor';
import Header from '../component/Header';
import PreLoader from '../component/PreLoader';
import Footer from '../component/Footer';
import About from '../container/About';
import AboutPage from '../container/AboutPage';
import ContactPage from '../container/ContactPage';
import Education from '../container/Education';
import Home from '../container/Home';
import Services from '../container/Services';
import Projects from '../container/Projects';

const Main = () => (
  <>
    {/* <Cursor /> */}
    <Header />
    <Home />
    <About />
    <Services />
    <Education />
    <Projects />
    {/* <ContactPage /> */}
    {/* <AboutPage /> */}
    <Footer />
  </>
);

export default Main;
