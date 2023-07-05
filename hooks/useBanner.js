import useSWR from 'swr';

const useBanner = () => {
  const { data, isLoading, error } = useSWR('/banner-section?populate=*');
  return {
    data: data,
    isLoading: isLoading,
    isError: error,
  };
};

export default useBanner;
