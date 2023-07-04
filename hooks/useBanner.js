import useSWR from 'swr';

const useBanner = () => {
  const { data, error } = useSWR('/banner-section?populate=*');
  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useBanner;
