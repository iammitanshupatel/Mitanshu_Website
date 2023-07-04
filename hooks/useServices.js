import useSWR from 'swr';

const useServices = () => {
  const { data, error } = useSWR('/service-section?populate=*');
  const { data: services, error: servicesError } = useSWR(
    '/service-section?populate[services][populate]=*',
  );
  if (data) data['data']['services'] = services?.data?.services;
  return {
    data: data,
    isLoading: !error && !data,
    isError: error || servicesError,
  };
};

export default useServices;
