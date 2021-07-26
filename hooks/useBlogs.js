import useSWR from 'swr';
import fetcher from '../lib/fetch';

const useBlogs = id => {
  const { data, error } = useSWR(id ? `/blogs/${id}` : '/blogs', fetcher);
  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useBlogs;
