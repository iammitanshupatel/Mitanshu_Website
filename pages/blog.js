import BlogPageHeader from '../component/BlogPageHeader';
import BlogPageContent from '../component/BlogPageContent';
import useBlog from '../hooks/useBlog';
import useBlogs from '../hooks/useBlogs';
import Head from 'next/head';
import PreLoader from '../component/PreLoader';

const BlogPage = () => {
  const { data: blogs, isLoading: blogsLoading, isError: blogsError } = useBlogs();
  const { data, isLoading, isError } = useBlog();
  if ((blogsLoading, isLoading)) return <PreLoader />;
  if ((blogsError, isError)) return <h1>Error</h1>;
  return (
    <>
      <Head>
        <title>Blog Page</title>
      </Head>
      {data && <BlogPageHeader data={data} />}
      {blogs && <BlogPageContent blogs={blogs} />}
    </>
  );
};

export default BlogPage;
