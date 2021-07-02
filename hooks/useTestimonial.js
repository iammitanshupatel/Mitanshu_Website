import useSWR from 'swr';

const useTestimonial = () => useSWR('/testimonial-section');

export default useTestimonial;
