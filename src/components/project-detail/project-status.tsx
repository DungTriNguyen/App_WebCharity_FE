import React from 'react';
import { Card } from '../ui/card';
import Image from 'next/image';
import { Separator } from '../ui/separator';
import TargetIcon from '../icons/target-icon';
import ClockIcon from '../icons/clock-icon';
import { Progress } from '../ui/progress';
import { Button } from '../ui/button';
import { SquareArrowOutUpRightIcon } from 'lucide-react';
import redCrossLogo from '../../../public/red-cross-logo.png';

const ProjectStatus = () => {
  return (
    <Card className='p-6 flex flex-col gap-4'>
      <div>
        <p>Tổ chức / cá nhân đồng hành với chiến dịch </p>
        <div className='flex gap-2 items-center'>
          <Image alt='' width={48} height={48} src={redCrossLogo.src} />
          <p>Hội chữ thập đỏ Việt Nam</p>
        </div>
      </div>
      <Separator />
      <div className='flex justify-around'>
        <div className='flex gap-2'>
          <TargetIcon width='40' height='40' />
          <div className='flex flex-col'>
            <span className='text-gray-500'>Mục tiêu chiến dịch</span>
            <span className='font-bold'>100.000.000 VND</span>
            <span className='font-bold'>100 tình nguyện viên</span>
          </div>
        </div>
        <div className='flex gap-2'>
          <ClockIcon width='40' height='40' />
          <div className='flex flex-col'>
            <span className='text-gray-500'>Thời gian còn lại</span>
            <span className='font-bold'>10 ngày</span>
          </div>
        </div>
      </div>
      <div>
        <p className='font-bold'>Tiền ủng hộ</p>
        <Progress value={60} />
        <div className='flex w-full'>
          <p>
            đã đạt được <span className='font-bold'>1500000/1000000 VND</span>
          </p>
          <p className='ml-auto'>15%</p>
        </div>
      </div>
      <div>
        <p className='font-bold'>Tình nguyện viên</p>
        <Progress value={60} />
        <div className='flex w-full'>
          <p>
            đã đạt được <span className='font-bold'>15/20 TNV</span>
          </p>
          <p className='ml-auto'>15%</p>
        </div>
      </div>
      <div className='flex justify-around'>
        <Button>Ủng hộ tiền</Button>
        <Button variant={'outline'}>Tham gia tình nguyện</Button>
      </div>
      <Button variant={'link'} className='ml-auto'>
        Chia sẻ để lan tỏa yêu thương <SquareArrowOutUpRightIcon />
      </Button>
    </Card>
  );
};

export default ProjectStatus;
