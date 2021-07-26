import useSWR from 'swr';
import fetcher from '../lib/fetch';

const useContact = () => {
  const { data, error } = useSWR('/contact-section', fetcher);
  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useContact;
