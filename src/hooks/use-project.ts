import { useQuery } from '@tanstack/react-query';
import { useAxiosAuth } from './use-axios-auth';
import { CAMPAIGN_ROLE, CAMPAIGN_TYPE } from '@/app/enum';

const useGetProjectQuery = ({
  role,
  keyword,
  front_status,
  type,
}: {
  type?: CAMPAIGN_TYPE;
  role?: CAMPAIGN_ROLE;
  keyword?: string;
  front_status?: string;
}) => {
  const apiAuth = useAxiosAuth();
  return useQuery({
    queryKey: ['project_list', role, keyword, type, front_status],
    queryFn: async () => {
      try {
        const res = await apiAuth.get('/project', {
          params: { role, keyword },
        });

        // filter by local only
        if (front_status && !type) {
          return res.data?.data.filter(
            (item: TCampaign) => item.front_status_label === front_status
          );
        } else if (type && !front_status) {
          return res.data?.data.filter((item: TCampaign) => item.type === type);
        } else if (front_status && type) {
          return res.data?.data.filter(
            (item: TCampaign) =>
              item.type === type && item.front_status_label === front_status
          );
        }
        return res.data?.data;
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
