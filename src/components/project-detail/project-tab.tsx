import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import SummaryCampaign from './summary-campaign';
import DonatedList from './donated-list';

const tabList = [
  {
    label: 'Câu chuyện',
    value: 'summary',
    component: <SummaryCampaign />,
  },
  {
    label: 'Danh sách ủng hộ',
    value: 'supported',
    component: <DonatedList />,
  },
  {
    label: 'Danh sách TNV',
    value: 'vulunteer',
    component: <DonatedList />,
  },
];

const ProjectTab = () => {
  return (
    <Tabs defaultValue='summary' className='w-full mt-6'>
      <TabsList className='flex items-center gap-2 justify-start bg-white'>
        {tabList.map((item) => (
          <TabsTrigger
            key={item.value}
            value={item.value}
            className='bg-muted data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-full'
          >
            {item.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabList.map((item) => (
        <TabsContent key={item.value} value={item.value}>
          {item.component}
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default ProjectTab;
