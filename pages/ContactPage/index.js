import { useFormik } from 'formik';
import Mail from '../../public/icon/mail-outline.svg';
import Call from '../../public/icon/call-outline.svg';
import Location from '../../public/icon/location-outline.svg';
import Cursor from '../../component/Cursor';
import Button from '../../component/Button';

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
                <Button btnText="Send It" onClick={formik.handleSubmit} />
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
            <img
              src="https://maps.googleapis.com/maps/api/staticmap?key=AIzaSyAEGvdbD539IOD6GeZEIQfUbNdchSbidDM&center=bengaluru&markers=size:tiny%7Ccolor:red|12.850052,77.646571&zoom=9&format=png&maptype=roadmap&style=element:geometry%7Ccolor:0x212121&style=element:labels.icon%7Cvisibility:off&style=element:labels.text.fill%7Ccolor:0x757575&style=element:labels.text.stroke%7Ccolor:0x212121&style=feature:administrative%7Celement:geometry%7Ccolor:0x757575&style=feature:administrative.country%7Celement:labels.text.fill%7Ccolor:0x9e9e9e&style=feature:administrative.land_parcel%7Cvisibility:off&style=feature:administrative.locality%7Celement:labels.text.fill%7Ccolor:0xbdbdbd&style=feature:poi%7Celement:labels.text.fill%7Ccolor:0x757575&style=feature:poi.park%7Celement:geometry%7Ccolor:0x181818&style=feature:poi.park%7Celement:labels.text.fill%7Ccolor:0x616161&style=feature:poi.park%7Celement:labels.text.stroke%7Ccolor:0x1b1b1b&style=feature:road%7Celement:geometry.fill%7Ccolor:0x2c2c2c&style=feature:road%7Celement:labels.text.fill%7Ccolor:0x8a8a8a&style=feature:road.arterial%7Celement:geometry%7Ccolor:0x373737&style=feature:road.highway%7Celement:geometry%7Ccolor:0x3c3c3c&style=feature:road.highway.controlled_access%7Celement:geometry%7Ccolor:0x4e4e4e&style=feature:road.local%7Celement:labels.text.fill%7Ccolor:0x616161&style=feature:transit%7Celement:labels.text.fill%7Ccolor:0x757575&style=feature:water%7Celement:geometry%7Ccolor:0x000000&style=feature:water%7Celement:labels.text.fill%7Ccolor:0x3d3d3d&size=1200x150&scale=2&visual_refresh=true"
              title="Profile Picture"
              alt="Profile avatar"
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default ContactPage;
