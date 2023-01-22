/* eslint-disable react/display-name */
import Head from 'next/head';
import dynamic from 'next/dynamic';
import useContact from 'hooks/useContact';
import common from 'styles/common.module.scss';
import styles from 'component/ContactForm/contactForm.module.scss';
import Error500 from './500';
const PreLoader = dynamic(() => import('component/PreLoader'));
const ContactPageHeader = dynamic(() => import('component/ContactPageHeader'), {
  loading: () => <PreLoader />,
});
const ContactForm = dynamic(() => import('component/ContactForm'));
const ContactPageFooter = dynamic(() => import('component/ContactPageFooter'));

const ContactPage = () => {
  const { data, isLoading, isError } = useContact();
  if (isLoading) return <PreLoader />;
  if (isError) return <Error500 />;
  return (
    <>
      <Head>
        <title>Contact Page - Mitanshu Patel</title>
      </Head>
      {data && <ContactPageHeader data={data} />}
      <div className={`${common.containerCtc} ${styles.top45}`}>
        <ContactForm />
      </div>
      {data && <ContactPageFooter data={data} />}
    </>
  );
};

export default ContactPage;
