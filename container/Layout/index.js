import PropTypes from 'prop-types';
import Head from 'next/head';
import Header from 'component/Header';
import Footer from 'component/Footer';
// import Cursor from 'component/Cursor';
import { fetchStaticMeta, fetchDynamicMeta } from 'component/MetaTags';
import { useRouter } from 'next/router';

const Layout = ({ children }) => {
  const { pathname } = useRouter();
  return (
    <>
      {/* <Cursor /> */}
      <Head>
        {fetchStaticMeta()}
        {pathname === '/' &&
          fetchDynamicMeta({
            title: 'Mitanshu Patel',
            keywords:
              'mitanshu patel, personal portfolio, full-stack developer, React, Node, React Native, Agile Development, Blockchain Solutions',
            description:
              'Passionate Software Engineer specializing in full-stack development using React, Node, and React Native. Certified in CSS, JavaScript, React, and Rest API.',
          })}
      </Head>
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
