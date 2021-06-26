import useSWR from 'swr';

const useAbout = () => useSWR('/about-me');

export default useAbout;
