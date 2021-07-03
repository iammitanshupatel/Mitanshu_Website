import BlogPageHeader from '../component/BlogPageHeader';
import BlogPageContent from '../component/BlogPageContent';
import useBlog from '../hooks/useBlog';
import useBlogs from '../hooks/useBlogs';

const BlogPage = () => {
  const { data: blogs } = useBlogs();
  const { data } = useBlog();
  return (
    <>
      {data && <BlogPageHeader data={data} />}
      {data && <BlogPageContent blogs={blogs} />}
    </>
  );
};

export default BlogPage;
