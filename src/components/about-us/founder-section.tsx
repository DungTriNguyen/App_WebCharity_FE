import Image from 'next/image';
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

const FounderSection = () => {
  const founderInfo = [
    {
      id: 1,
      title: 'CEO',
      name: 'Nguyễn Văn A',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
      avatar: '',
    },
    {
      id: 2,
      title: 'FOUNDER',
      name: 'Nguyễn Văn B',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
      avatar: '',
    },
  ];
  return (
    <div className='bg-[#1B7CC1] bg-opacity-50 py-16'>
      <h3 className='font-bold text-3xl text-center'>Nhà sáng lập</h3>
      <div className='container 2xl:max-w-[1200px] mx-auto flex justify-center gap-8 mt-8'>
        {founderInfo.map((founder) => (
          <div
            key={founder.id}
            className='flex flex-col items-center max-w-[500px] bg-white p-16'
          >
            <Avatar className='h-[250px] rounded-2xl mx-auto w-full'>
              <AvatarImage src={'https://i.pravatar.cc/300'} alt='@shadcn' />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            {/* <div className='w-[350px] h-[200px] rounded-3xl bg-black'></div> */}
            <h4 className=''>{founder.name}</h4>
            <h3 className='text-2xl font-bold'>{founder.title}</h3>
            <p className='text-center'>{founder.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FounderSection;
