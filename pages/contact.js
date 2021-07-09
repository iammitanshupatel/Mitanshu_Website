import ContactPageHeader from '../component/ContactPageHeader';
import ContactForm from '../component/ContactForm';
import ContactPageFooter from '../component/ContactPageFooter';
import useContact from '../hooks/useContact';

const ContactPage = () => {
  const { data } = useContact();
  return (
    <>
      {data && <ContactPageHeader data={data} />}
      <ContactForm />
      {data && <ContactPageFooter data={data} />}
    </>
  );
};

export default ContactPage;
