import useSWR from 'swr';

const usePortfolio = () => {
  const { data, error } = useSWR('/portfolio-section?populate=*');
  const { data: projects, error: projectsError } = useSWR(
    '/portfolio-section?populate[projects][populate]=*',
  );
  if (data) data['data']['projects'] = projects && projects?.data?.projects;
  return {
    data: data,
    isLoading: (!error || !projectsError) && (!data || !projects),
    isError: error || projectsError,
  };
};

export default usePortfolio;
