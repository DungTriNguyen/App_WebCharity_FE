import React from 'react';
import { Separator } from '../ui/separator';
import { Button } from '../ui/button';
import { MoveRightIcon } from 'lucide-react';

const OfficeInfo = () => {
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
        icon list here
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
