
import ContactPageHeader from '../component/ContactPageHeader';
import ContactForm from '../component/ContactForm';
import ContactPageFooter from '../component/ContactPageFooter';
import useContactPage from '../hooks/useContactPage';

const ContactPage = () => {
  const { data } = useContactPage;
  console.log(data);
  return (
    <>
      {data || <ContactPageHeader data={data} />}
      <ContactForm />
      <ContactPageFooter />
    </>
  );
};

export default ContactPage;
