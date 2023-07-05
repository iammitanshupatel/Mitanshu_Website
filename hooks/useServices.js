import useSWR from 'swr';

const useServices = () => {
  const { data, isLoading, error } = useSWR('/service-section?populate=*');
  const {
    data: services,
    isLoading: servicesLoading,
    error: servicesError,
  } = useSWR('/service-section?populate[services][populate]=*');
  if (data) data['data']['services'] = services?.data?.services;
  return {
    data: data,
    isLoading: isLoading || servicesLoading,
    isError: error || servicesError,
  };
};

export default useServices;
