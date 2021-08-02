import axios from 'axios';
import dynamic from 'next/dynamic';
import { ErrorMessage, useFormik } from 'formik';
const Button = dynamic(() => import('../Button'));
import styles from './contactForm.module.scss';
import common from '../../styles/common.module.scss';
import { useRef, useState } from 'react';

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
  const msgRef = useRef();
  const [message, setMessage] = useState('');
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validate,
    onSubmit: (values, { resetForm }) => {
      return axios({
        method: 'post',
        url: `${process.env.NEXT_PUBLIC_API_BASE_URL}contact-forms`,
        data: {
          name: values.name,
          email: values.email,
          details: values.message,
        },
      })
        .then(res => {
          if (res.status === 200) {
            resetForm({ values: '' });
            msgRef.current.classList.toggle(styles.successMsg);
            setMessage('Message has been sent! Thanks!');
            setTimeout(function () {
              location.reload(true);
            }, 500);
          }
        })
        .catch(err => {
          setMessage(`${err}. Please try again later.`);
        });
    },
  });
  return (
    <>
      <div id="message" ref={msgRef} className={formik.errors ? styles.errorMsg : null}>
        <p>{formik.errors.name || formik.errors.email || formik.errors.msg || message}</p>
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
          <Button btnText="Send It" ariaLabel="Send the form" onClick={formik.handleSubmit} />
        </div>
      </form>
    </>
  );
};

export default ContactForm;
