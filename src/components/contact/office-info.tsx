import React from 'react';
import { Separator } from '../ui/separator';
import { Button } from '../ui/button';
import { MoveRightIcon } from 'lucide-react';
import FacebookIcon from '../icons/facebook-icon';
import InstagramIcon from '../icons/instagram-icon';
import TiktokIcon from '../icons/tiktok-icon';
import TwitterIcon from '../icons/twitter-icon';
import Link from 'next/link';

const OfficeInfo = () => {
  const socialInfo = [
    {
      key: 'instagram',
      href: 'https://www.sgu.edu.vn/',
      icon: <InstagramIcon />,
    },
    {
      key: 'facebook',
      href: 'https://www.facebook.com/TruongDaihocSaiGon.SGU',
      icon: <FacebookIcon />,
    },

    {
      key: 'twitter',
      href: 'https://www.sgu.edu.vn/',
      icon: <TwitterIcon />,
    },
    {
      key: 'tiktok',
      href: 'https://www.sgu.edu.vn/',
      icon: <TiktokIcon />,
    },
  ];
  return (
    <div>
      <div className='flex flex-col gap-4'>
        <h3 className='text-3xl font-bold'>Văn phòng của chúng tôi</h3>
        <p>
          Hãy ghé thăm SGU charity để quyên góp cho các chương trình của chúng
          tôi, thảo luận về mối quan hệ hợp tác hoặc đơn giản là ghé thăm để nói
          lời chào.
        </p>
        <p>
          <b>Địa chỉ: </b>14E21 Thảo Điền, Phường Thảo Điền, Thành phố Thủ Đức,
          Thành phố Hồ Chí Minh
        </p>
        <p>
          <b>Số điện thoại: </b>+84 283 827 8787
        </p>
        <p>
          <b>Giờ làm việc: </b>Thứ 2 - Thứ 6, 9h - 18h
        </p>
        <p>
          <b>Email: </b>testing@gmail.com
        </p>
        <p>Dõi theo chúng tôi trên mạng xã hội</p>
        <div className='flex gap-4 '>
          {socialInfo.map((item) => (
            <Link
              href={item.href}
              key={item.key}
              className='flex flex-col items-center h-12 w-12 '
              target='_blank'
            >
              {item.icon}
            </Link>
          ))}
        </div>
      </div>
      <Separator className='my-4' />
      <h4 className='text-primary font-bold text-xl'>
        Bạn cần cập nhật thông tin cá nhân?
      </h4>
      <p className='mt-4'>
        Hãy ghé thăm SGU charity để quyên góp cho các chương trình của chúng
        tôi, thảo luận về mối quan hệ hợp tác hoặc đơn giản là ghé thăm để nói
        lời chào.
      </p>
      <Button variant={'link'} className='p-0'>
        Cập nhật thông tin của bạn ở đây
        <MoveRightIcon />
      </Button>
      <Separator className='my-4' />
      <h4 className='font-bold text-xl'>Bản đồ</h4>
      <div className='rounded-xl overflow-hidden h-[300px] bg-[url(https://picsum.photos/800/600)] bg-opacity-40 bg-cover mb-2 flex flex-col p-2 mt-4' />
    </div>
  );
};

export default OfficeInfo;
