'use client';
import ProjectItem from '@/components/project/project-item';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import React, { use } from 'react';
import { Separator } from '@/components/ui/separator';
import DonateForm from '@/components/project-detail/donate-form';
import { useGetProjectByID } from '@/hooks/use-project';

const DonatePage = (props: { params: Promise<{ id: number }> }) => {
  const params = use(props.params);
  const { id } = params;
  const { data: projectById } = useGetProjectByID({ project_id: id });
  const project = projectById?.data?.[0];
  console.log('donation project token', project);

  return (
    <div className='container 2xl:max-w-[1200px] mx-auto my-8 flex gap-8'>
      <div className='w-2/5'>
        <Card className='flex flex-col'>
          <div className='flex gap-2 items-center p-4'>
            <Image
              alt='avartar'
              width={48}
              height={48}
              src={project?.user?.avatar_url || '/images/avatar.png'}
              className='rounded-full'
            />
            <div className=''>
              <p>Tiền ủng hộ được chuyển đến</p>
              <p className='text-primary text-xl'>{project?.user?.name}</p>
            </div>
          </div>
          <Separator />
          <div className='p-4'>
            <ProjectItem project={project} />
          </div>
        </Card>
      </div>
      <div className='w-3/5'>
        <DonateForm />
      </div>
    </div>
  );
};

export default DonatePage;
