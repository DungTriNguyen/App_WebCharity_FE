import React from 'react';
import OwnedDonateTable from './owned-donate-table';
import { donatedColumn } from './owned-donate-column';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useDonationQuery } from '@/hooks/use-donation';
import { useSession } from 'next-auth/react';

const OwnedDonateList = () => {

  const session = useSession();
  const { data: donations } = useDonationQuery({ user_id: session.data?.user?.detail?.id as number });
  return (
    <Card className='p-4 flex flex-col gap-4'>
      <Input placeholder='search here' type='search' />
      <OwnedDonateTable
        columns={donatedColumn}
        data={donations?.data || []}
        loading={false}
      />
    </Card>
  );
};

export default OwnedDonateList;
