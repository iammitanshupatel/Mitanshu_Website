import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import Button from '../../component/Button';
import SingleBlogPageContent from '../../component/SingleBlogPageContent';
import useBlogs from '../../hooks/useBlogs';

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

const SingleBlogPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data: blogData } = useBlogs(id);
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
    <div className="srvContainer">
      {blogData && <SingleBlogPageContent data={blogData} />}
      <section className="blog-article">
        <div className="articleCmt">
          <h3 className="comment-reply-title">Write a comment</h3>
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
      </section>
    </div>
  );
};

export default SingleBlogPage;
