import React from 'react';
import { Label } from '../ui/label';
import { CalendarFoldIcon, HandCoinsIcon, HandHeartIcon } from 'lucide-react';
import { Button } from '../ui/button';
import { Progress } from '../ui/progress';

const ProjectItem = () => {
  return (
    <div className='min-w-[400px]'>
      <div className='rounded-xl overflow-hidden h-[300px] bg-[url(https://picsum.photos/400/300)] bg-opacity-40 bg-contain mb-2 flex flex-col p-2'>
        <div className='bg-black text-accent bg-opacity-50 mt-auto rounded-full py-4 px-6 flex gap-2 items-center'>
          <div className='flex flex-col gap-2 w-full'>
            <div className='flex justify-between'>
              <span>11111/22222</span>
              <span>60%</span>
            </div>
            <Progress value={60} />
          </div>
          <Button
            size={'icon'}
            variant={'ghost'}
            className='bg-accent text-accent-foreground rounded-full ml-auto p-1'
          >
            <HandCoinsIcon width={20} height={20} strokeWidth={1} />
          </Button>
        </div>
      </div>
      <Label className='font-bold text-lg mt-2'>
        “Những mùa xuân nguyên vẹn” - Tết vì nạn nhân chất độc da cam
      </Label>
      <div className='flex justify-between text-accent-foreground'>
        <span className='flex gap-1 items-center'>
          <HandHeartIcon strokeWidth={1} />
          500 lượt ủng hộ
        </span>
        <span className='flex gap-1 items-center'>
          <CalendarFoldIcon strokeWidth={1} />
          29 ngày
        </span>
      </div>
    </div>
  );
};

export default ProjectItem;
