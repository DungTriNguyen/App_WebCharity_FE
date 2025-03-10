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
import { TSVolunteer } from '@/app/types';

const VolunteerList = ({ project }: { project: TCampaign }) => {
  const volunteerData: TSVolunteer[] = [
    // {
    //   id: '123',
    //   supporter: 'Nguyen Van A',
    //   amount: '100000',
    //   updatedAt: '2025/01/02',
    // },
    // {
    //   id: '1',
    //   supporter: 'Nguyen Van A',
    //   amount: '100000',
    //   updatedAt: '2025/01/02',
    // },
    // {
    //   id: '2',
    //   supporter: 'Nguyen Van A',
    //   amount: '100000',
    //   updatedAt: '2025/01/02',
    // },
    // {
    //   id: '3',
    //   supporter: 'Nguyen Van A',
    //   amount: '100000',
    //   updatedAt: '2025/01/02',
    // },
  ];
  return (
    <Card>
      <CardHeader>
        <CardTitle>Danh sách Tham gia TNV</CardTitle>
        <CardDescription />
      </CardHeader>
      <CardContent>
        <DonatedTable
          columns={donatedColumn}
          data={volunteerData}
          loading={false}
        />
      </CardContent>
    </Card>
  );
};

export default VolunteerList;
