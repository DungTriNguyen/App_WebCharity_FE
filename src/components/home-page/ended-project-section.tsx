import { MoveRightIcon } from 'lucide-react';
import React from 'react';
import { Button } from '../ui/button';

const EndedProjectSection = () => {
  return (
    <div>
      <h3 className='text-3xl font-bold text-center'>Chiến dịch đã kết thúc</h3>
      <div className='flex justify-between items-center'>
        <span className='font-bold'>Chiến dịch của tổ chức</span>
        <Button variant={'link'}>
          Xem tất cả <MoveRightIcon size={24} />
        </Button>
      </div>
      <div>list of projects here</div>
    </div>
  );
};

export default EndedProjectSection;
