/* eslint-disable react/display-name */
import Head from 'next/head';
import dynamic from 'next/dynamic';
import useBlog from 'hooks/useBlog';
import useBlogs from 'hooks/useBlogs';
import Error500 from './500';
import fetchMeta from 'component/meta';
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

  if (blogsLoading || isLoading) {
    return <PreLoader />;
  }

  if (blogsError || isError) {
    return <Error500 />;
  }

  return (
    <>
      <Head>
        {fetchMeta({
          title: 'Blog Page - Mitanshu Patel',
          keywords: blogs?.data?.map(skill => skill?.title)?.join(', '),
          description: data?.data?.blogPageHeader,
        })}
      </Head>
      {data && <BlogPageHeader data={data.data} />}
      {blogs && <BlogPageContent blogs={blogs.data} />}
    </>
  );
};

export default BlogPage;
