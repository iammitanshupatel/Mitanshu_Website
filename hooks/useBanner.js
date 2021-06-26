import useSWR from 'swr';

const useBanner = () => useSWR('/banner-section');

export default useBanner;
