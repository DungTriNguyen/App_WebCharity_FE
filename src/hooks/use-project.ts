import { useQuery } from '@tanstack/react-query';
import { useAxiosAuth } from './use-axios-auth';

const useGetProjectQuery = ({
  type,
  role,
}: {
  type?: TCampaignType;
  role?: TCampaignRole;
}) => {
  const apiAuth = useAxiosAuth();
  return useQuery({
    queryKey: ['project_list', type, role],
    queryFn: async () => {
      try {
        const res = await apiAuth.get('/project', { params: { type, role } });
        return res.data;
      } catch (e: any) {
        throw Error(e?.response?.data?.message);
      }
    },
    // enabled: !!token,
  });
};

export { useGetProjectQuery };
