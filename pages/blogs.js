/* eslint-disable react/display-name */
import dynamic from 'next/dynamic';
import { NextSeo } from 'next-seo';
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

  if (blogsLoading || isLoading) {
    return <PreLoader />;
  }

  if (blogsError || isError) {
    return <Error500 />;
  }
  return (
    <>
      <NextSeo
        title="Mitanshu Patel's Blog"
        description="Read informative blog posts on various topics by Mitanshu Patel."
        openGraph={{
          url: 'https://mitanshupatel.com/blogs',
          title: "Mitanshu Patel's Blog",
          description: 'Read informative blog posts on various topics by Mitanshu Patel.',
        }}
      />
      {data && <BlogPageHeader data={data.data} />}
      {blogs && <BlogPageContent blogs={blogs.data} />}
    </>
  );
};

export default BlogPage;
