'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useGetUserProfileQuery, useUpdateUserAvatarMutation } from '@/hooks/use-profile';
import { usePathname } from 'next/navigation';
import React, { useMemo, useRef } from 'react';

const UserLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const pathname = usePathname();
  // console.log();

  const { data: profile } = useGetUserProfileQuery();
  const { mutate } = useUpdateUserAvatarMutation()
  const fileInputRef = useRef<HTMLInputElement>(null);
  const handleAvatarClick = () => {
    fileInputRef.current?.click();
  };

  const getTitlePage = useMemo(() => {
    switch (pathname) {
      case '/user/profile':
        return 'Trang cá nhân';
      case '/user/edit-profile':
        return 'Thông tin cá nhân';
      // case '/user/donation':
      //   return 'Quyên góp của tôi';
      // case '/user/volunteer':
      //   return 'Tình nguyện viên của tôi';
      default:
        return '';
    }
  }, [pathname])

  const toBase64 = (file: File) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Handle the file upload logic here
      // console.log('Selected file:', file);
      // You can use a function to upload the file and update the avatar URL
      const payload = new Promise(async (resolve, reject) => {
        const base64 = await toBase64(file);
        resolve({
          name: file.name,
          base64
        })
      }).then((res) => {
        mutate(res as TUploadImage)
        return 1;
      })
      return payload;
    }
  };
  return (
    <>
      <div className=''>
        <div className='bg-user-profile h-[350px] w-full bg-cover flex items-center justify-center text-white text-6xl font-bold relative'>
          <div className='absolute top-0 left-0 bottom-0 right-0 bg-black bg-opacity-35'></div>
          <div className='absolute'>{getTitlePage}</div>
        </div>
        <div className='container 2xl:max-w-[1200px] mx-auto my-2 relative pt-12 '>
          <div className='absolute top-[-84px] left-1/2 transform -translate-x-1/2 flex flex-col items-center'>
            <Avatar
              className='w-40 h-40  mx-auto rounded-full '
              onClick={handleAvatarClick}
            >
              <AvatarImage src={profile?.data?.avatar_url} alt='@shadcn' />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <input
              type='file'
              ref={fileInputRef}
              style={{ display: 'none' }}
              onChange={handleFileChange}
            />
            <div className='text-center font-bold'>{profile?.data?.name}</div>
            <div className='text-center'>@{profile?.data?.username}</div>
          </div>
          <div className='container 2xl:max-w-[1200px] mx-auto my-2 relative pt-12'>
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserLayout;
