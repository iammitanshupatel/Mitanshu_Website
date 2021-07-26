import useSWR from 'swr';

const useContact = () => {
  const { data, error } = useSWR('/contact-section');
  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useContact;
