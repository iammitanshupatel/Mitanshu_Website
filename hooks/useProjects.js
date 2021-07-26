import useSWR from 'swr';

const useProjects = id => {
  const { data, error } = useSWR(id ? `/projects/${id}` : '/projects');
  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useProjects;
