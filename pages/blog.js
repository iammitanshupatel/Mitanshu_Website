import BlogPageHeader from '../component/BlogPageHeader';
import BlogPageContent from '../component/BlogPageContent';
import useBlog from '../hooks/useBlog';

const BlogPage = () => {
  const { data } = useBlog();
  return (
    <>
      {data && <BlogPageHeader data={data} />}
      {data && <BlogPageContent data={data} />}
    </>
  );
};

export default BlogPage;
