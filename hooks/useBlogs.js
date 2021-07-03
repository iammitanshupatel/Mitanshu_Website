import useSWR from 'swr';

const useBlogs = id => useSWR(id ? `/blogs/${id}` : '/blogs');

export default useBlogs;
