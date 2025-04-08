'use client';
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import OwnedDonateList from '../owned-donate-list';

const tabList = [
  {
    label: 'Ủng hộ',
    value: 'donate',
    component: <OwnedDonateList />,
  },
  {
    label: 'Tham gia',
    value: 'participate',
    component: <OwnedDonateList />,
  },
];
const HistoryDonationVolunteerTable = () => {
  return (
    <div className='flex gap-8 w-full'>
      <Tabs className='w-full mt-2 ' defaultValue={tabList[0].value}>
        <TabsList className='flex items-center gap-2 justify-start bg-white'>
          {tabList.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className='bg-muted data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-full'
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
        {tabList.map((tab) => (
          <TabsContent key={tab.value} value={tab.value}>
            {tab.component}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default HistoryDonationVolunteerTable;
