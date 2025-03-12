import React from 'react';
import OwnedDonateTable from './owned-donate-table';
import { donatedColumn } from './owned-donate-column';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

const OwnedDonateList = () => {
  const data: TDonatedData[] = [
    {
      amount: '100000',
      id: '123',
      supporter: 'Testing',
      updatedAt: '2025-02-23',
    },
  ];
  return (
    <Card className='p-4 flex flex-col gap-4'>
      <Input placeholder='search here' type='search' />
      <OwnedDonateTable
        columns={donatedColumn}
        data={data || []}
        loading={false}
      />
    </Card>
  );
};

export default OwnedDonateList;
