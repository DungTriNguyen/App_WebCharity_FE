import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { formatCurrencyToVND } from '@/lib/utils';
import React from 'react';

const ManagedProjectItem = ({ project }: { project: TCampaign }) => {
  console.log('project:', project);
  return (
    <Card className='p-4 flex gap-6 items-center'>
      {project !== null ? (
        <>
          <div
            className='h-[200px] rounded-lg w-1/3 bg-cover bg-no-repeat object-cover overflow-hidden'
            style={{ backgroundImage: `url('${project.background_image}')` }}
          ></div>
          <div className='w-2/3'>
            <h5 className='font-bold text-lg'>{project.name}</h5>
            <p>
              Tạo bởi{' '}
              <span className='text-primary font-bold'>
                {project.user.name}
              </span>
            </p>
            <p className='flex justify-between mt-4'>
              <span>
                Đã đạt được{' '}
                <span className='text-primary font-bold'>
                  {formatCurrencyToVND(project.donations_with_paid_sum_amount)}
                </span>
              </span>
              <span className='font-bold'>
                {project.donations_with_paid_count}
              </span>
            </p>
            <Progress value={60} className='mt-2' />
            <p className='flex justify-between mt-2'>
              <span>
                Mục tiêu{' '}
                <span className=' font-bold'>
                  {formatCurrencyToVND(project.donation_target)}
                </span>
              </span>
              <span className='font-bold'>
                {project.donations_with_paid_count}
                <span className='font-normal'>người đã ủng hộ</span>
              </span>
            </p>
          </div>
        </>
      ) : (
        <div className='text-center text-muted-foreground'>Không có dự án</div>
      )}
    </Card>
  );
};

export default ManagedProjectItem;
