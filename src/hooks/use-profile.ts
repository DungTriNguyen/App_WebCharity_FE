import { queryClient } from '@/app/providers/client';
import { useMutation, useQuery } from '@tanstack/react-query';
import { toast } from 'sonner';
import { useAxiosAuth } from './use-axios-auth';

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

const useGetListUserProfileQuery = ({
  type,
  search,
}: {
  type?: string;
  search?: string;
}) => {
  const apiAuth = useAxiosAuth();
  return useQuery({
    queryKey: ['user-profile-list', type, search],
    queryFn: async () => {
      try {
        const res = await apiAuth.get('/user', {
          params: { type, keyword: search },
        });
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

const useUpdateUserAvatarMutation = () => {
  const apiAuth = useAxiosAuth();
  return useMutation({
    mutationKey: ['user-avatar'],
    mutationFn: async (payload: TUploadImage) => {
      try {
        const res = await apiAuth.put('/user/avatar', payload);
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

export {
  useGetUserProfileQuery,
  useUpdateUserProfileMutation,
  useGetListUserProfileQuery,
  useUpdateUserAvatarMutation,
};
