import useSWR from 'swr';

const useBlog = () => {
  const { data, isLoading, error } = useSWR('/blog-section?populate=*');
  const {
    data: blogs,
    isLoading: blogsLoading,
    error: blogsError,
  } = useSWR('/blog-section?populate[blogs][populate]=*');
  if (data) data['data']['blogs'] = blogs && blogs?.data?.blogs;
  return {
    data: data,
    isLoading: isLoading || blogsLoading,
    isError: error || blogsError,
  };
};

export default useBlog;
