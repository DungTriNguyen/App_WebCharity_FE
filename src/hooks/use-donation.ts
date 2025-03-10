import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { useAxiosAuth } from './use-axios-auth';

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

export { useDonationQuery };
