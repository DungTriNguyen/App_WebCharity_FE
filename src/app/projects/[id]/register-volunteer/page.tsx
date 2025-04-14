'use client';
import RegisterVolunteerForm from '@/components/project-detail/register-volunteer-form';
import ProjectItem from '@/components/project/project-item';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useGetProjectByID } from '@/hooks/use-project';
import Image from 'next/image';
import { use } from 'react';

const RegisterVolunteer = (props: { params: Promise<{ id: string }> }) => {
  const params = use(props.params);
  const { id } = params;
  const { data: projectById } = useGetProjectByID({ slug: id });
  const project = projectById?.data?.[0];

  return (
    <div className='container 2xl:max-w-[1200px] mx-auto my-8 flex gap-8'>
      <div className='w-2/5'>
        <Card className='flex flex-col'>
          <div className='flex gap-2 items-center p-4'>
            <Image
              alt='avatar'
              width={48}
              height={48}
              src={project?.user?.avatar_url || 'avatar not found'}
              className='rounded-full aspect-square'
            />
            <div className=''>
              <p>Tình nguyện cho chiến dịch của tổ chức/ cá nhân:</p>
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
        {project?.id && <RegisterVolunteerForm projectId={project?.id} />}
      </div>
    </div>
  );
};

export default RegisterVolunteer;
