import useSWR from 'swr';

const useTestimonial = () => {
  const { data, isLoading, error } = useSWR('/testimonial-section');
  return {
    data: data,
    isLoading: isLoading,
    isError: error,
  };
};

export default useTestimonial;
