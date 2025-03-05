'use client';
import React from 'react';
import ProjectSwiper from './project-swiper';
import ProjectTab from './project-tab';

import ProjectStatus from './project-status';
import ProjectContact from './project-contact';
import ProjectProcessing from './project-processing';

const ProjectDetail = () => {
  return (
    <div className='flex-col 2xl:max-w-[1200px] mx-auto'>
      <div className='container 2xl:max-w-[1200px] mx-auto flex gap-8 my-8'>
        <div className='w-3/5'>
          <h3 className='font-bold text-xl'>Project name</h3>
          <ProjectSwiper />
          <ProjectTab />
        </div>
        <div className='w-2/5 flex flex-col gap-4'>
          <ProjectStatus />
          <ProjectContact />
        </div>
      </div>
      <div className='mt-20'>
        <ProjectProcessing />
      </div>
    </div>
  );
};

export default ProjectDetail;
