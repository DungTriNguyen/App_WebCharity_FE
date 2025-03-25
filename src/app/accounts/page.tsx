'use client'
import AccountFilter from '@/components/accounts/account-filter';
import AccountList from '@/components/accounts/account-list';
import React from 'react';

const AccountsPage = () => {
  return (
    <div className='container 2xl:max-w-[1200px] mx-auto flex flex-col gap-8 my-8'>
      <AccountFilter />
    </div>
  );
};

export default AccountsPage;
