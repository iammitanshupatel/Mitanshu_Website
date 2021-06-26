import useSWR from 'swr';

const useSkills = () => useSWR('/skills');

export default useSkills;
