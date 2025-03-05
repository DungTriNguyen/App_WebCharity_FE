import { useQuery } from '@tanstack/react-query';
import { useAxiosAuth } from './use-axios-auth';
import { TCampaignRole } from '@/app/enum';
import { TCampaign } from '@/app/types';

const useGetProjectQuery = ({ role }: { role?: TCampaignRole }) => {
  const apiAuth = useAxiosAuth();
  return useQuery<TCampaign>({
    queryKey: ['project_list', role],
    queryFn: async () => {
      try {
        const res = await apiAuth.get('/project', { params: { role } });
        return res.data;
      } catch (e: any) {
        throw Error(e?.response?.data?.message);
      }
    },
    // enabled: !!token,
  });
};

const useGetProjectByID = ({ project_id }: { project_id: number }) => {
  const apiAuth = useAxiosAuth();
  return useQuery<TCampaign>({
    queryKey: ['project_id', project_id],
    queryFn: async () => {
      try {
        const res = await apiAuth.get(`/project?project_id=${project_id}`);
        return res.data;
      } catch (e: any) {
        throw Error(e?.response?.data?.message);
      }
    },
    // enabled: !!token,
  });
};

export { useGetProjectQuery, useGetProjectByID };
