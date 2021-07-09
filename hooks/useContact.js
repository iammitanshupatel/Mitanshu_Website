import useSWR from 'swr';

const useContact = () => useSWR('/contact-section');

export default useContact;
