import PropTypes from 'prop-types';
import Footer from '../../component/Footer';
import Header from '../../component/Header';
import PreLoader from '../../component/PreLoader';

const Layout = ({ children }) => (
  <>
    {/* <PreLoader /> */}
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default Layout;
