import useSWR from 'swr';

const useBlogs = id => {
  const { data, error } = useSWR(id ? `/blogs/${id}` : '/blogs');
  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useBlogs;
