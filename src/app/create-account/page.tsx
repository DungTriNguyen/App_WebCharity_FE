'use client';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

import React from 'react';

const RegisterPage = () => {
  const router = useRouter();
  return (
    <>
      {/* <div className='bg-contact-banner h-[350px] w-full bg-cover flex items-center justify-center text-white text-6xl font-bold relative'>
        <div className='absolute top-0 left-0 bottom-0 right-0 bg-black bg-opacity-35'></div>
        <div className='absolute'>LIÊN HỆ GÓP Ý - PHẢN HỒI</div>
      </div> */}
      <div className='grid grid-cols-2 gap-8 container 2xl:max-w-[1200px] mx-auto my-8'>
        <Button
          className='text-xl py-6'
          onClick={() => router.push('/create-account/individual')}
        >
          Đăng ký tài khoản cá nhân
        </Button>
        <Button
          className='text-xl py-6'
          onClick={() => router.push('/create-account/organization')}
        >
          Đăng ký tài khoản tổ chức
        </Button>
      </div>
    </>
  );
};

export default RegisterPage;
