import useSWR from 'swr';

const useEducation = () => useSWR('/educations');

export default useEducation;
