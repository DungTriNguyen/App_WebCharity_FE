import { useQuery } from '@tanstack/react-query';
import { useAxiosAuth } from './use-axios-auth';
import { CAMPAIGN_ROLE, CAMPAIGN_TYPE } from '@/app/enum';

const useGetProjectQuery = ({
  type,
  role,
  keyword,
}: {
  type?: CAMPAIGN_TYPE;
  role?: CAMPAIGN_ROLE;
  keyword?: string;
}) => {
  const apiAuth = useAxiosAuth();
  return useQuery({
    queryKey: ['project_list', type, role, keyword],
    queryFn: async () => {
      try {
        const res = await apiAuth.get('/project', {
          params: { type, role, keyword },
        });
        return res.data;
      } catch (e: any) {
        throw Error(e?.response?.data?.message);
      }
    },
    // enabled: !!token,
  });
};

export { useGetProjectQuery };
