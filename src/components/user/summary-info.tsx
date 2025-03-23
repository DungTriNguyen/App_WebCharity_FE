import React from 'react';
import { Card } from '../ui/card';
import { formatCurrencyToVND } from '@/lib/utils';

const SummaryInfo = ({ summaryInfo }: { summaryInfo: TUser }) => {
  const {
    projects_donations_sum_amount,
    projects_donations_count,
    donations_sum_amount,
  } = summaryInfo;

  return (
    <Card className='p-4 grid grid-cols-2 gap-4 bg-[#f9f9f9] border-none'>
      <div className='bg-primary col-span-2 min-h-[200px] rounded-lg text-white p-4 flex flex-col justify-between font-bold '>
        <div className='opacity-0'> a</div>
        <p className='text-center text-2xl'>
          {formatCurrencyToVND(projects_donations_sum_amount)}
        </p>
        <div className='text-lg'>Số tiền ủng hộ</div>
      </div>
      <div className='col-span-1 min-h-[160px] bg-white shadow rounded-lg p-4 flex flex-col justify-between '>
        <div className='opacity-0'> a</div>
        <p className='text-center text-2xl font-bold'>
          {projects_donations_count}
        </p>
        <div className='text-lg'>Số lượt ủng hộ</div>
      </div>
      <div className='col-span-1 min-h-[160px] bg-white shadow rounded-lg p-4 flex flex-col justify-between'>
        <div className='opacity-0'> a</div>
        <p className='text-center text-2xl font-bold'>
          {donations_sum_amount || 0}
        </p>
        <div className='text-lg'>Số lượt tham gia</div>
      </div>
    </Card>
  );
};

export default SummaryInfo;
