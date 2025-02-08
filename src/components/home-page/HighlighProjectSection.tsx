import { MoveRightIcon } from 'lucide-react';
import React from 'react';
import { Button } from '../ui/button';

const HighlighProjectSection = () => {
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
      <div>list of projects here</div>
    </div>
  );
};

export default HighlighProjectSection;
