import { useFormik } from 'formik';
import Mail from '../../public/icon/mail-outline.svg';
import Call from '../../public/icon/call-outline.svg';
import Location from '../../public/icon/location-outline.svg';
import Cursor from '../../component/Cursor';
// import PreLoader from '../../component/PreLoader';

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
const ContactPage = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
    },
    validate,
    handleSubmit: values => {
      if (!values) {
        formik.errors.msg = 'Both Fields Required';
      }
      return values;
    },
  });
  return (
    <>
      <main>
        <div className="dataScroll">
          <div className="pageHeader boxAnimate animated">
            <span className="little">Contact me</span>
            <h1 className="title">Let's talk</h1>
          </div>
          <div className="containerCtc boxAnimate animated top60 txc">
            <h2>
              Like what you see? Have a project you’d like to talk about? <br />
              Want to ask me a personal question?
            </h2>
          </div>
          <div className="containerCtc boxAnimate animated top45">
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
                    id="name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    className={formik.errors.email ? 'borderBottom' : 'inp'}
                  />
                </div>
              </div>
              <div className="formMsg">
                <textarea
                  name="comments"
                  id="comments"
                  rows="4"
                  className="inp"
                  placeholder="Message"
                />
              </div>
              <div className="top45 txc">
                <input
                  type="submit"
                  className="btn"
                  value="Send it"
                  onSubmit={formik.handleSubmit}
                />
              </div>
            </form>
          </div>
          <div className="containerCtc boxAnimate animated top120">
            <div className="contactInfos txc">
              <div className="responsiveInfo">
                <div className="iconWidth">
                  <Mail />
                  <a href="mailto:mitanshu.u.patel@gmail.com">mitanshu.u.patel@gmail.com</a>
                  <span>email</span>
                </div>
              </div>
              <div className="responsiveInfo">
                <div className="iconWidth">
                  <Location />
                  <a href="">V-10 Radhesh Appts, Thaltej, Gujarat, 380054, India</a>
                  <span>address</span>
                </div>
              </div>
              <div className="responsiveInfo wFull">
                <div className="iconWidth">
                  <Call />
                  <a href="tel:9104552342">+91 91045 52342</a>
                  <span>phone</span>
                </div>
              </div>
            </div>
          </div>
          <div className="boxAnimate animated map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.2662567306434!2d72.51806641496829!3d23.050698184938913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b5354506905%3A0x2a0f2287766643a3!2sRadhesh%20Apartment%2C%20Radhesh%20Apartment%2C%20Opp%20Luv-kush%20Tower%2C%20Thaltej%20Tekra%2C%20Jay%20Ambenagar%20Rd%2C%20Patel%20Society%2C%20Jai%20Ambe%20Nagar%2C%20Thaltej%2C%20Ahmedabad%2C%20Gujarat%20380059!5e0!3m2!1sen!2sin!4v1620387380147!5m2!1sen!2sin" />
          </div>
        </div>
      </main>
    </>
  );
};

export default ContactPage;
