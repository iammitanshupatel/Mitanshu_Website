import useSWR from 'swr';
import fetcher from '../lib/fetch';

const useBlog = () => {
  const { data, error } = useSWR('/blog-section', fetcher);
  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useBlog;
