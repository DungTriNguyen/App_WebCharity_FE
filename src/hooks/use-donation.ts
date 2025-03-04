import { useQuery } from '@tanstack/react-query';
import { useAxiosAuth } from './use-axios-auth';

const useDonationQuery = ({ limit, page }: { limit: number; page: number }) => {
  const apiAuth = useAxiosAuth();
  return useQuery({
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
