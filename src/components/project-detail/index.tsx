'use client';
import React from 'react';
import ProjectSwiper from './project-swiper';
import ProjectTab from './project-tab';

import ProjectStatus from './project-status';
import ProjectContact from './project-contact';
import ProjectProcessing from './project-processing';
import { useGetProjectByID } from '@/hooks/use-project';

const ProjectDetail = ({ project_id }: { project_id: string }) => {
  const { data: projectById } = useGetProjectByID({ slug: project_id });

  const project = projectById?.data?.[0];

  return project ? (
    <div className='flex-col 2xl:max-w-[1200px] mx-auto'>
      <div className='container 2xl:max-w-[1200px] mx-auto flex gap-8 my-8'>
        <div className='w-3/5'>
          <h3 className='font-bold text-2xl mb-4'>{project.name}</h3>
          <ProjectSwiper project={project} />
          <ProjectTab project={project} />
        </div>
        <div className='w-2/5 flex flex-col gap-4'>
          <ProjectStatus project={project} />
          <ProjectContact project={project} />
        </div>
      </div>
      <div className='mt-20'>
        <ProjectProcessing />
      </div>
    </div>
  ) : null;
};

export default ProjectDetail;
