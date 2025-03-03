'use client';
import React from 'react';
import ProjectItem from './project-item';
import { useGetProjectQuery } from '@/hooks/use-project';

const ProjectList = () => {
  const { data } = useGetProjectQuery({});
  console.log(data);

  const projects = [
    {
      id: 1,
      title: 'Chiến dịch 1',
      description: 'Mô tả chiến dịch 1',
      image: 'https://via.placeholder.com/150',
      raised: 1000000,
      goal: 2000000,
      timeLeft: 10,
      details: [
        {
          unit: 'tình nguyện viên',
          current: 15,
          total: 20,
          label: 'đăng ký tình nguyện',
          count: 10,
        },
        {
          unit: 'vnd',
          current: 1500000,
          total: 30000000,
          label: 'ủng hộ tiền',
          count: 10,
        },
      ],
    },
    {
      id: 2,
      title: 'Chiến dịch 2',
      description: 'Mô tả chiến dịch 2',
      image: 'https://via.placeholder.com/150',
      raised: 1000000,
      goal: 2000000,
      timeLeft: 10,
      details: [
        {
          unit: 'tình nguyện viên',
          current: 15,
          total: 20,
          label: 'đăng ký tình nguyện',
          count: 10,
        },
        {
          unit: 'vnd',
          current: 1500000,
          total: 30000000,
          label: 'ủng hộ tiền',
          count: 10,
        },
      ],
    },
    {
      id: 3,
      title: 'Chiến dịch 2',
      description: 'Mô tả chiến dịch 2',
      image: 'https://via.placeholder.com/150',
      raised: 1000000,
      goal: 2000000,
      timeLeft: 10,
      details: [
        {
          unit: 'tình nguyện viên',
          current: 15,
          total: 20,
          label: 'đăng ký tình nguyện',
          count: 10,
        },
        {
          unit: 'vnd',
          current: 1500000,
          total: 30000000,
          label: 'ủng hộ tiền',
          count: 10,
        },
      ],
    },
    {
      id: 4,
      title: 'Chiến dịch 2',
      description: 'Mô tả chiến dịch 2',
      image: 'https://via.placeholder.com/150',
      raised: 1000000,
      goal: 2000000,
      timeLeft: 10,
      details: [
        {
          unit: 'vnd',
          current: 1500000,
          total: 30000000,
          label: 'ủng hộ tiền',
          count: 10,
        },
      ],
    },
    {
      id: 5,
      title: 'Chiến dịch 2',
      description: 'Mô tả chiến dịch 2',
      image: 'https://via.placeholder.com/150',
      raised: 1000000,
      goal: 2000000,
      timeLeft: 10,
      details: [
        {
          unit: 'vnd',
          current: 1500000,
          total: 30000000,
          label: 'ủng hộ tiền',
          count: 10,
        },
      ],
    },
    {
      id: 6,
      title: 'Chiến dịch 2',
      description: 'Mô tả chiến dịch 2',
      image: 'https://via.placeholder.com/150',
      raised: 1000000,
      goal: 2000000,
      timeLeft: 10,
      details: [
        {
          unit: 'tình nguyện viên',
          current: 15,
          total: 20,
          label: 'đăng ký tình nguyện',
          count: 10,
        },
      ],
    },
  ];
  return (
    <div className='mt-8'>
      <ul className='grid grid-cols-3 gap-8'>
        {data?.data.map((item) => {
          return <ProjectItem key={item.id} data={item} />;
        })}
      </ul>
    </div>
  );
};

export default ProjectList;
