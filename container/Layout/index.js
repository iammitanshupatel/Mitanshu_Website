import PropTypes from 'prop-types';
import Cursor from '../../component/Cursor';
import Footer from '../../component/Footer';
import Header from '../../component/Header';

const Layout = ({ children }) => (
  <>
    {/* <Cursor /> */}
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default Layout;
