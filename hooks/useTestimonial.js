import useSWR from 'swr';

const useTestimonial = () => useSWR('/testimonials');

export default useTestimonial;
