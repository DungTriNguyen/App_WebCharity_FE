import { USER_ROLES } from '@/app/enum';
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import SummaryInfo from './summary-info';
import OwnedDonateList from './owned-donate-list';
import ManagedProjectList from './managed-project/managed-project-list';

const UserTab = ({ role = USER_ROLES.USER }: { role: USER_ROLES }) => {
  const menuUser: {
    label: string;
    value: string;
    component: React.ReactNode;
  }[] = [
    {
      label: 'Ủng hộ',
      value: 'donate',
      component: <OwnedDonateList />,
    },
    {
      label: 'Tham gia',
      value: 'participate',
      component: <OwnedDonateList />, // need to be separate component
    },
  ];

  const agentUser: {
    label: string;
    value: string;
    component: React.ReactNode;
  }[] = [
    {
      label: 'Chiến dịch',
      value: 'campaign',
      component: <ManagedProjectList />,
    },
    {
      label: 'Người tham gia',
      value: 'participate',
      component: <div>tham gia component</div>,
    },
    {
      label: 'Người ủng hộ',
      value: 'supporter',
      component: <div>tham gia component</div>,
    },
    {
      label: 'Sao kê',
      value: 'report',
      component: <div>tham gia component</div>,
    },
  ];

  const renderUserRoleMenu = (roles: USER_ROLES) => {
    return (
      <div className='flex gap-8 w-full'>
        <Tabs
          defaultValue={
            roles === USER_ROLES.USER ? menuUser[0].value : agentUser[0].value
          }
          className='w-2/3 mt-6 '
        >
          <TabsList className='flex items-center gap-2 justify-start bg-white'>
            {roles === USER_ROLES.USER
              ? menuUser.map((item) => (
                  <TabsTrigger
                    key={item.value}
                    value={item.value}
                    className='bg-muted data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-full'
                  >
                    {item.label}
                  </TabsTrigger>
                ))
              : agentUser.map((item) => (
                  <TabsTrigger
                    key={item.value}
                    value={item.value}
                    className='bg-muted data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-full'
                  >
                    {item.label}
                  </TabsTrigger>
                ))}
          </TabsList>

          {roles === USER_ROLES.USER
            ? menuUser.map((item) => (
                <TabsContent key={item.value} value={item.value}>
                  {item.component}
                </TabsContent>
              ))
            : agentUser.map((item) => (
                <TabsContent key={item.value} value={item.value}>
                  {item.component}
                </TabsContent>
              ))}
        </Tabs>
        <div className='w-1/3 mt-8'>
          <SummaryInfo />
        </div>
      </div>
    );
  };

  return renderUserRoleMenu(role);
};

export default UserTab;
