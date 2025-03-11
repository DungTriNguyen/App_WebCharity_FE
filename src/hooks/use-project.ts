import { useQuery } from '@tanstack/react-query';
import { useAxiosAuth } from './use-axios-auth';
import { CAMPAIGN_ROLE, CAMPAIGN_TYPE } from '@/app/enum';

const useGetProjectQuery = ({
  role,
  keyword,
  front_status,
  type,
  category,
}: {
  type?: CAMPAIGN_TYPE;
  role?: CAMPAIGN_ROLE;
  keyword?: string;
  front_status?: string;
  category?: string;
}) => {
  const apiAuth = useAxiosAuth();
  return useQuery({
    queryKey: ['project_list', role, keyword, type, front_status, category],
    queryFn: async () => {
      try {
        const res = await apiAuth.get('/project', {
          params: { role, keyword },
        });

        const result = res.data?.data.filter((item: TCampaign) => {
          if (!(front_status || type || category)) return item;
          return (
            (!!front_status
              ? item.front_status_label === front_status
              : item) &&
            (!!type ? item.type === type : item) &&
            (!!category ? `${item.category.id}` === category : item)
          );
        });

        return result;
      } catch (e: any) {
        throw Error(e?.response?.data?.message);
      }
    },
    // enabled: !!token,
  });
};

const useGetProjectByID = ({ project_id }: { project_id: number }) => {
  const apiAuth = useAxiosAuth();
  return useQuery<TApiResponse<TCampaign[]>, Error>({
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
