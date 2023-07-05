import useSWR from 'swr';

const useContact = () => {
  const { data, isLoading, error } = useSWR('/contact-section?populate=*');
  const {
    data: socialMedia,
    isLoading: socialMediaLoading,
    error: socialMediaError,
  } = useSWR('/contact-section?populate[socialMedia][populate]=*');
  if (data) data['data']['socialMedia'] = socialMedia && socialMedia?.data?.socialMedia;
  return {
    data: data,
    isLoading: isLoading || socialMediaLoading,
    isError: error || socialMediaError,
  };
};

export default useContact;
