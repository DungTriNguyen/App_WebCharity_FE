import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Separator } from '../ui/separator';
import { formatCurrencyToVND } from '@/lib/utils';
import Link from 'next/link';
import { ChevronRightIcon } from 'lucide-react';
import { format } from 'date-fns';

const AccountItem = ({ data }: { data: TUser }) => {
  return (
    <li className='flex flex-col gap-2 rounded-xl p-4 bg-white shadow-md'>
      <div className='flex gap-2 items-center'>
        <Avatar>
          <AvatarImage src={data?.avatar_url} alt='@shadcn' />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className='block'>
          <p className='font-bold'>{data?.name}</p>
          <p className='text-gray-400'>{data?.username}</p>
        </div>
      </div>
      <Separator className='bg-primary' />
      <div>
        <p>
          Tài khoản thiện nguyện số:{' '}
          <span className='font-bold'>{data?.id}</span>
        </p>
        <p>
          Số tiền gây quỹ:{' '}
          <span className='font-bold'>
            {formatCurrencyToVND(data?.projects_donations_sum_amount)}
          </span>
        </p>
        <p>
          Tham gia từ:{' '}
          <span className='font-bold'>
            {format(new Date(data?.birth_of_date), 'MM/yyyy')}
          </span>
        </p>
      </div>
      <Link
        href={'#'}
        className='font-bold text-primary flex gap-1 hover:underline items-center'
      >
        Xem chi tiết <ChevronRightIcon width={16} height={16} />
      </Link>
    </li>
  );
};

export default AccountItem;
