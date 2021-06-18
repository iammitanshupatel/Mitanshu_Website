import { useFormik } from 'formik';
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

const SingleBlogPage = () => {
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
      <section className="singleBlog">
        <div className="blogInfo">
          <div className="datenauthor">
            <p>June-16, 2021</p>
            <span>
              <a href="#!">admin</a>
            </span>
          </div>
          <h2 className="blogTitle">
            Court nay merit few nor party learn. Why our year her eyes know even how
          </h2>
        </div>
        <img src="/image/Blogs/img-6.jpg" alt="" className="blogImg" />
      </section>
      <article className="singleBlogTxt">
        <p>
          Full he none no side. Uncommonly surrounded considered for him are its. It we is read good
          soon. My to considered delightful invitation announcing of no decisively boisterous. Did
          add dashwoods deficient man concluded additions resources. Or landlord packages overcame
          distance smallest in recurred. Wrong maids or be asked no on enjoy. Household few
          sometimes out attending described. Lain just fact four of am meet high.
        </p>
        <p>
          Wrong do point avoid by fruit learn or in death. So passage however besides invited
          comfort elderly be me. Walls began of child civil am heard hoped my. Satisfied pretended
          mr on do determine by. Old post took and ask seen fact rich. Man entrance settling
          believed eat joy. Money as drift begin on to. Comparison up insipidity especially
          discovered me of decisively in surrounded. Points six way enough she its father. Folly sex
          downs tears ham green forty.
        </p>
        <p>
          Exquisite cordially mr happiness of neglected distrusts. Boisterous impossible unaffected
          he me everything. Is fine loud deal an rent open give. Find upon and sent spot song son
          eyes. Do endeavor he differed carriage is learning my graceful. Feel plan know is he like
          on pure. See burst found sir met think hopes are marry among. Delightful remarkably new
          assistance saw literature mrs favourable.
        </p>
      </article>
      <section className="nextContent">
        <p className="link-subtitle">Next Content</p>
        <p className="link-title">
          Court nay merit few nor party learn. Why our year her eyes know even how
        </p>
      </section>
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
