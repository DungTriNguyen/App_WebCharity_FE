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
import { useDonationQuery } from '@/hooks/use-donation';

const DonatedList = ({ project }: { project: TCampaign }) => {
  const projectId = project.id;
  const { data: donationData, isLoading } = useDonationQuery({
    limit: 10,
    page: 1,
    projectId,
  });

  // const donatedData: TDonatedData[] = [
  //   {
  //     id: '123',
  //     supporter: 'Nguyen Van A',
  //     amount: '100000',
  //     updatedAt: '2025/01/02',
  //   },
  //   {
  //     id: '1',
  //     supporter: 'Nguyen Van A',
  //     amount: '100000',
  //     updatedAt: '2025/01/02',
  //   },
  //   {
  //     id: '2',
  //     supporter: 'Nguyen Van A',
  //     amount: '100000',
  //     updatedAt: '2025/01/02',
  //   },
  //   {
  //     id: '3',
  //     supporter: 'Nguyen Van A',
  //     amount: '100000',
  //     updatedAt: '2025/01/02',
  //   },
  // ];
  return (
    <Card>
      <CardHeader>
        <CardTitle>Danh sách ủng hộ</CardTitle>
        <CardDescription />
      </CardHeader>
      <CardContent>
        <DonatedTable
          columns={donatedColumn}
          data={donationData?.data?.data || []}
          loading={isLoading}
        />
      </CardContent>
    </Card>
  );
};

export default DonatedList;
