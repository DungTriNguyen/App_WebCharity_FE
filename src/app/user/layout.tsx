'use client';
import { usePathname } from 'next/navigation';
import React from 'react';

const UserLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const pathname = usePathname();
  // console.log(pathname);

  return (
    <>
      <div className='bg-user-profile h-[350px] w-full bg-cover flex items-center justify-center text-white text-6xl font-bold relative'>
        <div className='absolute top-0 left-0 bottom-0 right-0 bg-black bg-opacity-35'></div>
        <div className='absolute'>Trang cá nhân</div>
      </div>
      <div className='container 2xl:max-w-[1200px] mx-auto my-8 relative pt-12'>
        <div className='absolute top-[-84px] left-1/2 transform -translate-x-1/2 flex flex-col items-center'>
          <div className='w-24 h-24 bg-pink-500 mx-auto rounded-full'></div>
          <div className='text-center'>First name last name</div>
          <div className='text-center'>username</div>
        </div>
        {children}
      </div>
    </>
  );
};

export default UserLayout;
