import React from 'react';
import ProjectItem from './project-item';

const ProjectList = () => {
  const projects = [
    {
      id: 1,
      title: 'Chiến dịch 1',
      description: 'Mô tả chiến dịch 1',
      image: 'https://via.placeholder.com/150',
      raised: 1000000,
      goal: 2000000,
      timeLeft: 10,
    },
    {
      id: 2,
      title: 'Chiến dịch 2',
      description: 'Mô tả chiến dịch 2',
      image: 'https://via.placeholder.com/150',
      raised: 1000000,
      goal: 2000000,
      timeLeft: 10,
    },
    {
      id: 3,
      title: 'Chiến dịch 2',
      description: 'Mô tả chiến dịch 2',
      image: 'https://via.placeholder.com/150',
      raised: 1000000,
      goal: 2000000,
      timeLeft: 10,
    },
    {
      id: 4,
      title: 'Chiến dịch 2',
      description: 'Mô tả chiến dịch 2',
      image: 'https://via.placeholder.com/150',
      raised: 1000000,
      goal: 2000000,
      timeLeft: 10,
    },
    {
      id: 5,
      title: 'Chiến dịch 2',
      description: 'Mô tả chiến dịch 2',
      image: 'https://via.placeholder.com/150',
      raised: 1000000,
      goal: 2000000,
      timeLeft: 10,
    },
    {
      id: 6,
      title: 'Chiến dịch 2',
      description: 'Mô tả chiến dịch 2',
      image: 'https://via.placeholder.com/150',
      raised: 1000000,
      goal: 2000000,
      timeLeft: 10,
    },
  ];
  return (
    <div className='mt-8'>
      <ul className='grid grid-cols-3 gap-8'>
        {projects.map((item) => {
          return <ProjectItem key={item.id} />;
        })}
      </ul>
    </div>
  );
};

export default ProjectList;
