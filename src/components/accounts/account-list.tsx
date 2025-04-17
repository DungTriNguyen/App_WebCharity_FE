import React from 'react';
import AccountItem from './account-item';
import { Button } from '../ui/button';
import { useGetListUserProfileQuery } from '@/hooks/use-profile';

const AccountList = ({ type, search }: { type: string; search: string }) => {
  const { data } = useGetListUserProfileQuery({ type, search });

  return (
    <>
      <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8'>
        {data?.data?.map((item: TUser) => (
          <AccountItem key={`${item.id}`} data={item} />
        ))}
      </ul>
      <div className='flex justify-center pt-8 md:pt-14'>
        <Button className='w-full sm:w-auto'>Xem thêm</Button>
      </div>
    </>
  );
};

export default AccountList;
