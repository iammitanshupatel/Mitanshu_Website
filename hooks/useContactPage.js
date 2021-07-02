import useSWR from 'swr';

const useContactPage = () => useSWR('/contact-page');

export default useContactPage;
