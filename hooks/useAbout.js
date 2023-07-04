import useSWR from 'swr';

const useAbout = () => {
  const { data, error } = useSWR('/about-me?populate=*');
  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useAbout;
