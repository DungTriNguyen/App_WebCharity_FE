import { useQuery } from '@tanstack/react-query';
import { useAxiosAuth } from './use-axios-auth';

const useGetCategoryQuery = () => {
  const apiAuth = useAxiosAuth();
  return useQuery({
    queryKey: ['category'],
    queryFn: async () => {
      try {
        const res = await apiAuth.get('/category');
        return res.data;
      } catch (e: any) {
        throw Error(e?.response?.data?.message);
      }
    },
  });
};

export { useGetCategoryQuery };
