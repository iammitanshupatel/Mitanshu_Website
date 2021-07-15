import BlogPageHeader from '../component/BlogPageHeader';
import BlogPageContent from '../component/BlogPageContent';
import useBlog from '../hooks/useBlog';
import useBlogs from '../hooks/useBlogs';
import Head from 'next/head';

const BlogPage = () => {
  const { data: blogs } = useBlogs();
  const { data } = useBlog();
  return (
    <>
      <Head>
        <title>Blog Page</title>
      </Head>
      {data && <BlogPageHeader data={data} />}
      {data && <BlogPageContent blogs={blogs} />}
    </>
  );
};

export default BlogPage;
