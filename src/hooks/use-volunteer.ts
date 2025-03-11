import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { useAxiosAuth } from './use-axios-auth';

const useVolunteerQuery = ({
  limit,
  page,
  projectId,
}: {
  limit: number;
  page: number;
  projectId: number;
}): UseQueryResult<TApiResponse<TSVolunteer>, Error> => {
  const apiAuth = useAxiosAuth();
  return useQuery<TApiResponse<TSVolunteer>, Error>({
    queryKey: ['get_volunteer', limit, page, projectId],
    queryFn: async () => {
      try {
        const res = await apiAuth.get('/volunteer', {
          params: { limit, page, project_id: projectId },
        });
        return res.data;
      } catch (e: any) {
        throw Error(e?.response?.data?.message);
      }
    },
  });
};

export { useVolunteerQuery };
