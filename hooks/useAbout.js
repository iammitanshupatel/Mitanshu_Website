import useSWR from 'swr';

const useAbout = () => {
  const { data, error } = useSWR('/about-me');
  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useAbout;
