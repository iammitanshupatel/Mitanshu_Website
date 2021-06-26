import useSWR from 'swr';

const useEducationSkills = () => useSWR('/education-and-skills-section');

export default useEducationSkills;
