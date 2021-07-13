import axios from 'axios';
import { useFormik } from 'formik';
import Button from '../Button';
import styles from './contactForm.module.scss';
import common from '../../common-styles/common.module.scss';

const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Name Required';
  } else if (values.name.length > 15) {
    errors.name = 'Must be 15 characters or less';
  }

  if (!values.email) {
    errors.email = 'Email Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  return errors;
};
const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validate,
    onSubmit: (values, { resetForm }) => {
      if (!values) {
        formik.errors.msg = 'Both Fields Required';
      }
      resetForm({ values: '' });
      return axios({
        method: 'post',
        url: 'http://localhost:1337/contact-forms',
        data: {
          name: values.name,
          email: values.email,
          details: values.message,
        },
      });
    },
  });
  return (
    <>
      <div id="message" className={formik.errors ? styles.errorMsg : null}>
        <p>{formik.errors.name || formik.errors.email || formik.errors.msg}</p>
      </div>
      <form id="contactForm" className={styles.contactForm}>
        <div className={styles.rowInput}>
          <div className={styles.inputWidth}>
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              id="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={formik.errors.name ? styles.borderBottom : styles.inp}
            />
          </div>
          <div className={styles.inputWidth}>
            <input
              name="email"
              type="text"
              placeholder="Your Email"
              id="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className={formik.errors.email ? styles.borderBottom : styles.inp}
            />
          </div>
        </div>
        <div className={styles.formMsg}>
          <textarea
            name="message"
            rows="4"
            className={styles.inp}
            placeholder="Message"
            onChange={formik.handleChange}
            value={formik.values.message}
          />
        </div>
        <div className={`${styles.top45} ${common.txc}`}>
          <Button btnText="Send It" onClick={formik.handleSubmit} />
        </div>
      </form>
    </>
  );
};

export default ContactForm;
