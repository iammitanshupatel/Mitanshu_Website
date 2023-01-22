/* eslint-disable react/display-name */
import Head from 'next/head';
import dynamic from 'next/dynamic';
import useBlog from 'hooks/useBlog';
import useBlogs from 'hooks/useBlogs';
import Error500 from './500';
const PreLoader = dynamic(() => import('component/PreLoader'));
const BlogPageHeader = dynamic(() => import('component/BlogPageHeader'), {
  loading: () => <PreLoader />,
});
const BlogPageContent = dynamic(() => import('component/BlogPageContent'), {
  loading: () => <PreLoader />,
});

const BlogPage = () => {
  const { data: blogs, isLoading: blogsLoading, isError: blogsError } = useBlogs();
  const { data, isLoading, isError } = useBlog();
  if ((blogsLoading, isLoading)) return <PreLoader />;
  if ((blogsError, isError)) return <Error500 />;
  return (
    <>
      <Head>
        <title>Blog Page - Mitanshu Patel</title>
      </Head>
      {data && <BlogPageHeader data={data} />}
      {blogs && <BlogPageContent blogs={blogs} />}
    </>
  );
};

export default BlogPage;
