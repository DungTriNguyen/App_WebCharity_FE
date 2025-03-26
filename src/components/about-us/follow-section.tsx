import Image from 'next/image';
import React from 'react';
import peopleImg from '../../../public/people-img.png';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Button } from '../ui/button';

const FollowSection = () => {
  return (
    <div className='bg-nature-banner bg-cover min-h-[600px] py-16'>
      <div className='container 2xl:max-w-[1200px] mx-auto grid grid-cols-2 gap-16 items-center'>
        <div className='py-8 px-16'>
          <p className='font-bold text-4xl'>
            Theo giỏi bản tin của chúng tôi để nhận những thông báo mới nhất
          </p>
          <form className='flex flex-col gap-4 mt-8'>
            <Label>Họ tên</Label>
            <Input placeholder='Họ tên' />
            <Label>Email</Label>
            <Input placeholder='Email' />
            <div className='flex justify-end'>
              <Button type='submit' disabled>
                Đăng ký ngay
              </Button>
            </div>
          </form>
          <p className='mt-16 text-[#8D8D8D] text-sm'>
            Xem Chính sách bảo mật để biết chúng tôi sử dụng và giữ thông tin cá
            nhân của bạn một cách an toàn như thế nào.
          </p>
        </div>
        <Image width={600} height={500} alt='news' src={peopleImg.src} />
      </div>
    </div>
  );
};

export default FollowSection;
