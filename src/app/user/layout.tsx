'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useGetUserProfileQuery } from '@/hooks/use-profile';
import { usePathname } from 'next/navigation';
import React from 'react';

const UserLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const pathname = usePathname();
  // console.log(pathname);

  const { data: profile } = useGetUserProfileQuery();

  return (
    <>
      <div className='bg-user-profile h-[350px] w-full bg-cover flex items-center justify-center text-white text-6xl font-bold relative'>
        <div className='absolute top-0 left-0 bottom-0 right-0 bg-black bg-opacity-35'></div>
        <div className='absolute'>Trang cá nhân</div>
      </div>
      <div className='container 2xl:max-w-[1200px] mx-auto my-8 relative pt-12'>
        <div className='absolute top-[-84px] left-1/2 transform -translate-x-1/2 flex flex-col items-center'>
          <Avatar className='w-24 h-24  mx-auto rounded-full'>
            <AvatarImage src={profile?.data?.avatar_url} alt='@shadcn' />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className='text-center font-bold'>{profile?.data?.name}</div>
          <div className='text-center'>{profile?.data?.username}</div>
        </div>
        {children}
      </div>
    </>
  );
};

export default UserLayout;
