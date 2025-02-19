import { MoveRightIcon } from 'lucide-react';
import React from 'react';
import { Button } from '../ui/button';
import ProjectItem from '../project/project-item';

const HighlighProjectSection = () => {
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
          unit: 'tình nguyện viên',
          current: 15,
          total: 20,
          label: 'đăng ký tình nguyện',
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
          unit: 'tình nguyện viên',
          current: 15,
          total: 20,
          label: 'đăng ký tình nguyện',
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
    <div>
      <h3 className='text-3xl font-bold text-center'>
        Chiến dịch gây quỹ nổi bật
      </h3>
      <div className='flex justify-between items-center'>
        <span className='font-bold'>Chiến dịch của tổ chức</span>
        <Button variant={'link'}>
          Xem tất cả <MoveRightIcon size={24} />
        </Button>
      </div>
      <div className='w-full max-w-[1440px] overflow-hidden mx-auto'>
        <ul className='flex gap-8 overflow-auto pb-8'>
          {projects.map((item) => {
            return <ProjectItem key={item.id} details={item.details} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default HighlighProjectSection;
