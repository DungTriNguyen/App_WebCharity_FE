import { useMutation } from '@tanstack/react-query';
import { useAxiosAuth } from './use-axios-auth';
import { TContactFormData } from '@/app/types';

const usePostContactMutation = () => {
  const apiAuth = useAxiosAuth();

  return useMutation({
    mutationFn: async (contactFormData: TContactFormData) => {
      try {
        const res = await apiAuth.post('/contact', contactFormData);
        return res.data;
      } catch (error: any) {
        throw Error(
          error?.response?.data?.message || 'Failed to submit contact form'
        );
      }
    },
    onSuccess: (data) => {
      console.log('Contact form submitted successfully', data);
    },
    onError: (error) => {
      console.error('Contact form submission failed', error);
    },
  });
};

export { usePostContactMutation };
