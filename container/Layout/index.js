import PropTypes from 'prop-types';
import Header from 'component/Header';
import Footer from 'component/Footer';
// import Cursor from 'component/Cursor';
import { useRouter } from 'next/router';

const Layout = ({ children }) => {
  const { pathname } = useRouter();
  return (
    <>
      {/* <Cursor /> */}
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default Layout;
