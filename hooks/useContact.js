import useSWR from 'swr';

const useContact = () => {
  const { data, error } = useSWR('/contact-section?populate=*');
  const { data: socialMedia, error: socialMediaError } = useSWR(
    '/contact-section?populate[socialMedia][populate]=*',
  );
  if (data) data['data']['socialMedia'] = socialMedia && socialMedia?.data?.socialMedia;
  return {
    data: data,
    isLoading: (!error || !socialMediaError) && (!data || !socialMedia),
    isError: error || socialMediaError,
  };
};

export default useContact;
