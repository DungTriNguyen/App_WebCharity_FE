import { Card } from '@/components/ui/card';
import React from 'react';
import ManagedProjectItem from './managed-project-item';
import { useGetProjectQuery } from '@/hooks/use-project';
import { useSession } from 'next-auth/react';
const ManagedProjectList = () => {
  const session = useSession();

  const { data: project } = useGetProjectQuery({
    user_id: session.data?.user?.detail?.id as number,
  });

  return (
    <Card className='p-4 flex flex-col gap-4'>
      {project?.map((item: TCampaign) => (
        <a href={`/projects/${item.slug}`} key={item.id}>
          <ManagedProjectItem project={item} />
        </a>
      ))}
    </Card>
  );
};

export default ManagedProjectList;
