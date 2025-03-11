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

  return (
    <Card>
      <CardHeader>
        <CardTitle>Danh sách ủng hộ</CardTitle>
        <CardDescription />
      </CardHeader>
      <CardContent>
        <DonatedTable
          columns={donatedColumn}
          data={donationData?.data || []}
          loading={isLoading}
        />
      </CardContent>
    </Card>
  );
};

export default DonatedList;
