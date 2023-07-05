import useSWR from 'swr';

const useEducationSkills = () => {
  const { data, isLoading, error } = useSWR('/education-and-skills-section?populate=*');
  return {
    data: data,
    isLoading: isLoading,
    isError: error,
  };
};

export default useEducationSkills;
