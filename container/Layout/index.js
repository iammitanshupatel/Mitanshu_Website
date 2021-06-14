import PropTypes from 'prop-types';
import Cursor from '../../component/Cursor';
import Footer from '../../component/Footer';
import Header from '../../component/Header';
import PreLoader from '../../component/PreLoader';

const Layout = ({ children }) => (
  <>
    {/* <PreLoader /> */}
    {/* <Cursor /> */}
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default Layout;
