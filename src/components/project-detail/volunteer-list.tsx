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
import { useVolunteerQuery } from '@/hooks/use-volunteer';
import { volunteerColumn } from './volunteer-column';
import VolunteerTable from './volunteer-table';

const VolunteerList = ({ project }: { project: TCampaign }) => {
  const projectId = project?.id;
  const { data: volunteerData, isLoading } = useVolunteerQuery({
    limit: 10,
    page: 1,
    projectId,
  });

  console.log(volunteerData);

  // const volunteerData: TSVolunteer[] = [
  //   // {
  //   //   id: '123',
  //   //   supporter: 'Nguyen Van A',
  //   //   amount: '100000',
  //   //   updatedAt: '2025/01/02',
  //   // },
  //   // {
  //   //   id: '1',
  //   //   supporter: 'Nguyen Van A',
  //   //   amount: '100000',
  //   //   updatedAt: '2025/01/02',
  //   // },
  //   // {
  //   //   id: '2',
  //   //   supporter: 'Nguyen Van A',
  //   //   amount: '100000',
  //   //   updatedAt: '2025/01/02',
  //   // },
  //   // {
  //   //   id: '3',
  //   //   supporter: 'Nguyen Van A',
  //   //   amount: '100000',
  //   //   updatedAt: '2025/01/02',
  //   // },
  // ];
  return (
    <Card>
      <CardHeader>
        <CardTitle>Danh sách Tham gia TNV</CardTitle>
        <CardDescription />
      </CardHeader>
      <CardContent>
        <VolunteerTable
          columns={volunteerColumn}
          data={volunteerData?.data || []}
          loading={false}
        />
      </CardContent>
    </Card>
  );
};

export default VolunteerList;
