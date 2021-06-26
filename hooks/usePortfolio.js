import useSWR from 'swr';

const usePortfolio = () => useSWR('/portfolio-section');

export default usePortfolio;
