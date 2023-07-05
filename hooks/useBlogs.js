import useSWR from 'swr';

const useBlogs = id => {
  const { data, isLoading, error } = useSWR(id ? `/blogs/${id}?populate=*` : '/blogs?populate=*');
  return {
    data: data,
    isLoading: isLoading,
    isError: error,
  };
};

export default useBlogs;
