import dynamic from 'next/dynamic';
import PropTypes from 'prop-types';
const Header = dynamic(() => import('../../component/Header'));
const Footer = dynamic(() => import('../../component/Footer'));
const Cursor = dynamic(() => import('../../component/Cursor'));

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
