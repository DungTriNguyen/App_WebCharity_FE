import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';
import DonatedTable from './donated-table';
import { donatedColumn } from './donated-column';

const DonatedList = () => {
  const donatedData: TDonatedData[] = [
    {
      id: '123',
      supporter: 'Nguyen Van A',
      amount: '100000',
      updatedAt: '2025/01/02',
    },
    {
      id: '1',
      supporter: 'Nguyen Van A',
      amount: '100000',
      updatedAt: '2025/01/02',
    },
    {
      id: '2',
      supporter: 'Nguyen Van A',
      amount: '100000',
      updatedAt: '2025/01/02',
    },
    {
      id: '3',
      supporter: 'Nguyen Van A',
      amount: '100000',
      updatedAt: '2025/01/02',
    },
  ];
  return (
    <Card>
      <CardHeader>
        <CardTitle>Danh sách ủng hộ</CardTitle>
        <CardDescription />
      </CardHeader>
      <CardContent>
        <DonatedTable
          columns={donatedColumn}
          data={donatedData}
          loading={false}
        />
      </CardContent>
    </Card>
  );
};

export default DonatedList;
