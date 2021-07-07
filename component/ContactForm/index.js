import axios from 'axios';
import { useFormik } from 'formik';
import Button from '../Button';

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
    <div className="containerCtc top45">
      <div id="message" className={formik.errors ? 'errorMsg' : null}>
        <p>{formik.errors.name || formik.errors.email || formik.errors.msg}</p>
      </div>
      <form id="contactForm">
        <div className="rowInput">
          <div className="inputWidth">
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              id="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={formik.errors.name ? 'borderBottom' : 'inp'}
            />
          </div>
          <div className="inputWidth">
            <input
              name="email"
              type="text"
              placeholder="Your Email"
              id="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className={formik.errors.email ? 'borderBottom' : 'inp'}
            />
          </div>
        </div>
        <div className="formMsg">
          <textarea
            name="message"
            rows="4"
            className="inp"
            placeholder="Message"
            onChange={formik.handleChange}
            value={formik.values.message}
          />
        </div>
        <div className="top45 txc">
          <Button btnText="Send It" onClick={formik.handleSubmit} />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
