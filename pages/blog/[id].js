import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import useBlogs from 'hooks/useBlogs';
import styles from 'component/SingleBlogPageContent/singleBlogPageContent.module.scss';
import common from 'styles/common.module.scss';
import PreLoader from 'component/PreLoader';
import Error500 from 'pages/500';
const SingleBlogPageContent = dynamic(() => import('component/SingleBlogPageContent'));
const ContactForm = dynamic(() => import('component/ContactForm'));

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
  const { data: blogData, isLoading, isError } = useBlogs(id);
  if (isLoading) return <PreLoader />;
  if (isError) return <Error500 />;
  return (
    <div className={common.srvContainer}>
      {blogData && <SingleBlogPageContent data={blogData} />}
      <section className={styles.blogArticle}>
        <div className={styles.articleCmt}>
          <h3 className={styles.commentReplyTitle}>Write a comment</h3>
          <ContactForm />
        </div>
      </section>
    </div>
  );
};

export default SingleBlogPage;
