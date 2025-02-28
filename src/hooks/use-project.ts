import { useQuery } from '@tanstack/react-query';
import { useAxiosAuth } from './use-axios-auth';

const useGetProjectQuery = () => {
  const apiAuth = useAxiosAuth();
  return useQuery({
    queryKey: ['project_list'],
    queryFn: async () => {
      try {
        const res = await apiAuth.get('/project');
        return res.data;
      } catch (e: any) {
        throw Error(e?.response?.data?.message);
      }
    },
    // enabled: !!token,
  });
};

export { useGetProjectQuery };
