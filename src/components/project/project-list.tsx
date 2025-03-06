'use client';
import React from 'react';
import ProjectItem from './project-item';
import { useGetProjectQuery } from '@/hooks/use-project';
import { useSearchParams } from 'next/navigation';
import { getCampaignRole } from '@/lib/utils';
import { useFormContext } from 'react-hook-form';
import { formSchema } from '.';
import { z } from 'zod';

const ProjectList = () => {
  const form = useFormContext<z.infer<typeof formSchema>>();
  const searchParam = useSearchParams();

  const { data } = useGetProjectQuery({
    role: getCampaignRole(searchParam?.get('filter') as string),
    keyword: form.watch('keyword'),
    // keyword
  });

  // console.log(data);

  return (
    <div className='mt-8'>
      <ul className='grid grid-cols-3 gap-8'>
        {data?.data.map((item: TCampaign) => {
          return <ProjectItem key={item.id} project={item} />;
        })}
      </ul>
    </div>
  );
};

export default ProjectList;
