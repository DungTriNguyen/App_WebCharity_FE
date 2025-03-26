import React from 'react';
import AccountItem from './account-item';
import { Button } from '../ui/button';
import { useGetListUserProfileQuery } from '@/hooks/use-profile';

const AccountList = ({ type, search }: { type: string; search: string }) => {
  const { data } = useGetListUserProfileQuery({ type, search });

  return (
    <>
      <ul className='grid grid-cols-3 gap-8'>
        {data?.data?.map((item: TUser) => (
          <AccountItem key={`${item.id}`} data={item} />
        ))}
      </ul>
      <div className='flex justify-center pt-14'>
        <Button>Xem thêm</Button>
      </div>
    </>
  );
};

export default AccountList;
