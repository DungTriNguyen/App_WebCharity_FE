import { useMutation, useQuery } from '@tanstack/react-query';
import { useAxiosAuth } from './use-axios-auth';
import { queryClient } from '@/app/providers/client';
import { toast } from 'sonner';

const useGetUserProfileQuery = () => {
  const apiAuth = useAxiosAuth();
  return useQuery({
    queryKey: ['user-profile'],
    queryFn: async () => {
      try {
        const res = await apiAuth.get('/user/profile');
        return res.data;
      } catch (e: any) {
        throw Error(e);
      }
    },
  });
};

const useUpdateUserProfileMutation = () => {
  const apiAuth = useAxiosAuth();
  return useMutation({
    mutationKey: ['user-profile'],
    mutationFn: async (payload: TUser) => {
      try {
        const res = await apiAuth.put('/user/profile', payload);
        return res.data;
      } catch (e: any) {
        throw Error(e);
      }
    },
    onSuccess: (data) => {
      toast('Thông báo', {
        description: data.message,
      });
      queryClient.invalidateQueries();
    },
    onError: (data) => {
      toast('Thông báo', {
        description: data.message,
      });
      queryClient.invalidateQueries();
    },
  });
};

export { useGetUserProfileQuery, useUpdateUserProfileMutation };
