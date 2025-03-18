import React from 'react';
import AccountItem from './account-item';
import { Button } from '../ui/button';

const AccountList = () => {
  const accounts = [
    {
      id: 1,
      img_src: '',
      name: 'Đội công tác xh',
      hastag: 'hastag',
      charity_number: '123456',
      amount: 500000,
      created_at: '2025/03/05',
    },
    {
      id: 2,
      img_src: '',
      name: 'Đội công tác xh',
      hastag: 'hastag',
      charity_number: '123456',
      amount: 500000,
      created_at: '2025/03/05',
    },
    {
      id: 3,
      img_src: '',
      name: 'Đội công tác xh',
      hastag: 'hastag',
      charity_number: '123456',
      amount: 500000,
      created_at: '2025/03/05',
    },
    {
      id: 11,
      img_src: '',
      name: 'Đội công tác xh',
      hastag: 'hastag',
      charity_number: '123456',
      amount: 500000,
      created_at: '2025/03/05',
    },
  ];
  return (
    <>
      <ul className='grid grid-cols-3 gap-8'>
        {accounts.map((item) => (
          <AccountItem key={`${item.id}`} data={item} />
        ))}
      </ul>
      <div className='flex justify-center'>
        <Button>Xem thêm</Button>
      </div>
    </>
  );
};

export default AccountList;
