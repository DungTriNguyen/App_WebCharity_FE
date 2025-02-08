import React from 'react';
import { Button } from '../ui/button';
import Image from 'next/image';
import logo from '../../../public/sgu-logo.png';

const Header = () => {
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
        <Button>Ủng hộ ngay</Button>
        <Button>Trang chủ</Button>
        <Button>Chương trình</Button>
        <Button>Về chúng tôi</Button>
        <Button>Liên hệ</Button>
        <Button>Cơ hội trở thành CTV</Button>
        <Button>Đăng nhập</Button>
      </div>
    </div>
  );
};

export default Header;
