'use client';

import React from 'react';
import { Button } from '../ui/button';
import Image from 'next/image';
import logo from '../../../public/sgu-logo.png';
import { LogInIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';

const Header = () => {
  const router = useRouter();
  return (
    <div className='w-full h-[76px] border-b'>
      <div className='container flex m-auto justify-around items-center h-full'>
        <Image
          className='w-auto h-8 lg:h-10'
          src={logo.src}
          width={48}
          height={48}
          alt=''
        />
        <div className='flex gap-4'>
          <Button className='rounded-full'>Ủng hộ ngay</Button>
          <Button variant={'ghost'} onClick={() => router.push('/home')}>
            Trang chủ
          </Button>
          <Button variant={'ghost'}>Chương trình</Button>
          <Button variant={'ghost'} onClick={() => router.push('/about-us')}>
            Về chúng tôi
          </Button>
          <Button variant={'ghost'} onClick={() => router.push('/contact')}>
            Liên hệ
          </Button>
          <Button variant={'ghost'}>Cơ hội trở thành CTV</Button>
        </div>
        <Button variant={'ghost'}>
          <LogInIcon /> Đăng nhập
        </Button>
      </div>
    </div>
  );
};

export default Header;
