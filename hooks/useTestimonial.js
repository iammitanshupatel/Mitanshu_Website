import useSWR from 'swr';

const useTestimonial = () => {
  const { data, error } = useSWR('/testimonial-section');
  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useTestimonial;
