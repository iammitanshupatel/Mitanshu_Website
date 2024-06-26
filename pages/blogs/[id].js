import { useRouter } from 'next/router';
import { useMemo } from 'react';
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
  } else if (values.name.length > 100) {
    errors.name = 'Must be 100 characters or less';
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
    onSubmit: values => {
      if (!values) {
        formik.errors.msg = 'Both Fields Required';
      }
      return values;
    },
  });

  const { data: blogData, isLoading, isError } = useBlogs(id);

  const singleBlogPageContent = useMemo(() => {
    if (blogData) {
      return <SingleBlogPageContent data={blogData.data} />;
    }
    return null;
  }, [blogData]);

  if (isLoading) return <PreLoader />;
  if (isError) return <Error500 />;

  return (
    <div className={common.srvContainer}>
      {singleBlogPageContent}
      <section className={styles.blogArticle}>
        <div className={styles.articleCmt}>
          <h2 className={styles.commentReplyTitle}>Write a comment</h2>
          <ContactForm />
        </div>
      </section>
    </div>
  );
};

export default SingleBlogPage;
