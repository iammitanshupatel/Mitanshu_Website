import useSWR from 'swr';

const useProjects = id => {
  const { data, isLoading, error } = useSWR(
    id ? `/projects/${id}?populate=*` : '/projects?populate=*',
  );
  const {
    data: projectImage,
    isLoading: projectImageLoading,
    error: projectImageError,
  } = useSWR(
    id
      ? `/projects/${id}?populate[projectImage][populate]=*`
      : '/projects?populate[projectImage][populate]=*',
  );
  if (data) data['data']['projectImage'] = projectImage && projectImage?.data?.projectImage;

  return {
    data: data,
    isLoading: isLoading || projectImageLoading,
    isError: error || projectImageError,
  };
};

export default useProjects;
