import { Card } from '@/components/ui/card';
import React from 'react';
import ManagedProjectItem from './managed-project-item';
import { useGetProjectQuery } from '@/hooks/use-project';

const ManagedProjectList = ({ userId }: { userId: number }) => {
  const { data: projects } = useGetProjectQuery({
    user_id: userId,
  });

  return (
    <Card className='p-4 flex flex-col gap-4'>
      {projects?.map((item: TCampaign) => (
        <a href={`/projects/${item.slug}`} key={item.id}>
          <ManagedProjectItem project={item} />
        </a>
      ))}
    </Card>
  );
};

export default ManagedProjectList;
