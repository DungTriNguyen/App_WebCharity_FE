import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useAxiosAuth } from './use-axios-auth';

const usePostContactMutation = () => {
  const apiAuth = useAxiosAuth();
  const queryClient = useQueryClient();

  return useMutation<TApiResponse, Error, TContactFormData>({
    mutationFn: async (contactFormData) => {
      try {
        const res = await apiAuth.post<TApiResponse>(
          '/contact/store',
          contactFormData
        );
        return res.data;
      } catch (error: any) {
        const errorMessage =
          error.response?.data?.message || 'An unexpected error occurred';
        throw new Error(errorMessage);
      }
    },
    onSuccess: (data) => {
      // console.log('Contact form submitted', data);
      // Optionally invalidate or update related queries if needed
      // queryClient.invalidateQueries({ queryKey: ['contacts'] });
    },
    onError: (error) => {
      console.error('Contact form submission failed', error.message);
    },
  });
};

export { usePostContactMutation };
