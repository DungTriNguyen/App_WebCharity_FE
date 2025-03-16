import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Separator } from '../ui/separator';
import { formatCurrencyToVND } from '@/lib/utils';
import Link from 'next/link';
import { ChevronRightIcon } from 'lucide-react';

const AccountItem = () => {
  return (
    <li className='flex flex-col gap-2'>
      <div className='flex gap-2 items-center'>
        <Avatar>
          <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className='block'>
          <p className='font-bold'>Đội công tác</p>
          <p className='text-gray-400'>hastag</p>
        </div>
      </div>
      <Separator className='bg-orange-500' />
      <div>
        <p>
          Tài khoản thiện nguyện số: <span className='font-bold'>123</span>
        </p>
        <p>
          Số tiền gây quỹ:{' '}
          <span className='font-bold'>{formatCurrencyToVND(123456789)}</span>
        </p>
        <p>
          Tham gia từ: <span className='font-bold'>03/2025</span>
        </p>
      </div>
      <Link
        href={'#'}
        className='font-bold text-orange-500 flex gap-1 hover:underline items-center'
      >
        Xem chi tiết <ChevronRightIcon width={16} height={16} />
      </Link>
    </li>
  );
};

export default AccountItem;
