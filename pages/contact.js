import ContactPageHeader from '../component/ContactPageHeader';
import ContactForm from '../component/ContactForm';
import ContactPageFooter from '../component/ContactPageFooter';
import useContact from '../hooks/useContact';
import common from '../styles/common.module.scss';
import styles from '../component/ContactForm/contactForm.module.scss';

const ContactPage = () => {
  const { data } = useContact();
  return (
    <>
      {data && <ContactPageHeader data={data} />}
      <div className={`${common.containerCtc} ${styles.top45}`}>
        <ContactForm />
      </div>
      {data && <ContactPageFooter data={data} />}
    </>
  );
};

export default ContactPage;