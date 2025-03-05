import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { useAxiosAuth } from './use-axios-auth';
import { TApiResponse, TSDonationData } from '../app/types';

const useDonationQuery = ({
  limit,
  page,
}: {
  limit: number;
  page: number;
}): UseQueryResult<TApiResponse<TSDonationData>, Error> => {
  const apiAuth = useAxiosAuth();
  return useQuery<TApiResponse<TSDonationData>, Error>({
    queryKey: ['get_donations', limit, page],
    queryFn: async () => {
      try {
        const res = await apiAuth.get('/donation', { params: { limit, page } });
        return res.data;
      } catch (e: any) {
        throw Error(e?.response?.data?.message);
      }
    },
  });
};

export { useDonationQuery };
