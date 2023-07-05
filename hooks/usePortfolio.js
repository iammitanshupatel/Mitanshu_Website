import useSWR from 'swr';

const usePortfolio = () => {
  const { data, isLoading, error } = useSWR('/portfolio-section?populate=*');
  const {
    data: projects,
    isLoading: projectsLoading,
    error: projectsError,
  } = useSWR('/portfolio-section?populate[projects][populate]=*');
  if (data) data['data']['projects'] = projects && projects?.data?.projects;
  return {
    data: data,
    isLoading: isLoading || projectsLoading,
    isError: error || projectsError,
  };
};

export default usePortfolio;
