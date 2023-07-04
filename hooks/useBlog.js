import useSWR from 'swr';

const useBlog = () => {
  const { data, error } = useSWR('/blog-section?populate=*');
  const { data: blogs, error: blogsError } = useSWR('/blog-section?populate[blogs][populate]=*');
  if (data) data['data']['blogs'] = blogs && blogs?.data?.blogs;
  return {
    data: data,
    isLoading: (!error || !blogsError) && (!blogs || !data),
    isError: error || blogsError,
  };
};

export default useBlog;
