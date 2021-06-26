import useSWR from 'swr';

const useServices = () => useSWR('/service-section');

export default useServices;
