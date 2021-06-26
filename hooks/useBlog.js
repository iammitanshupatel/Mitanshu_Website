import useSWR from 'swr';

const useBlog = () => useSWR('/blog-section');

export default useBlog;
