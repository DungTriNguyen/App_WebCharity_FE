import ProjectItem from '@/components/project/project-item';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import React from 'react';
import redCrossLogo from '../../../../../public/red-cross-logo.png';
import { Separator } from '@/components/ui/separator';
import DonateForm from '@/components/project-detail/donate-form';

const DonatePage = () => {
  const projectData = {
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
      {
        unit: 'vnd',
        current: 1500000,
        total: 30000000,
        label: 'ủng hộ tiền',
        count: 10,
      },
    ],
  };
  return (
    <div className='container 2xl:max-w-[1200px] mx-auto my-8 flex gap-8'>
      <div className='w-2/5'>
        <Card className='flex flex-col'>
          <div className='flex gap-2 items-center p-4'>
            <Image alt='' width={48} height={48} src={redCrossLogo.src} />
            <div className=''>
              <p>Tiền ủng hộ được chuyển đến</p>
              <p className='text-primary text-xl'>Hội chữ thập đỏ Việt Nam</p>
            </div>
          </div>
          <Separator />
          <div className='p-4'>{/* <ProjectItem data={projectData} /> */}</div>
        </Card>
      </div>
      <div className='w-3/5'>
        <DonateForm />
      </div>
    </div>
  );
};

export default DonatePage;
