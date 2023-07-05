import useSWR from 'swr';

const useAbout = () => {
  const { data, isLoading, error } = useSWR('/about-me?populate=*');
  return {
    data: data,
    isLoading: isLoading,
    isError: error,
  };
};

export default useAbout;
