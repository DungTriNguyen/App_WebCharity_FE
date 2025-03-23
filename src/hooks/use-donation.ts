import { useMutation, useQuery, UseQueryResult } from '@tanstack/react-query';
import { useAxiosAuth } from './use-axios-auth';
import { toast } from 'sonner';
import { queryClient } from '@/app/providers/client';
import { useSession } from 'next-auth/react';

const useDonationQuery = ({
  limit,
  page,
  projectId,
}: {
  limit: number;
  page: number;
  projectId: number;
}): UseQueryResult<TApiResponse<TSDonationData>, Error> => {
  const apiAuth = useAxiosAuth();
  return useQuery<TApiResponse<TSDonationData>, Error>({
    queryKey: ['get_donations', limit, page, projectId],
    queryFn: async () => {
      try {
        const res = await apiAuth.get('/donation', {
          params: { limit, page, project_id: projectId },
        });
        return res.data;
      } catch (e: any) {
        throw Error(e?.response?.data?.message);
      }
    },
  });
};

const useDonateMutation = () => {
  const session = useSession();
  const apiAuth = useAxiosAuth();
  return useMutation({
    mutationKey: ['project_id'],
    mutationFn: async (payload: TDonateForm) => {
      try {
        const res = await apiAuth.post('/donation', {
          ...payload,
          user_id: session?.data?.user?.id,
        });
        return res.data;
      } catch (e: any) {
        throw Error(e?.response?.data?.message);
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
    },
  });
};

export { useDonationQuery, useDonateMutation };
