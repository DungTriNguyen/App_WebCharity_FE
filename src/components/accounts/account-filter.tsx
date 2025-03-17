'use client';
import React, { useMemo } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Input } from '../ui/input';
import { SearchIcon } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';

const AccountFilter = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const TAB_LIST = useMemo(
    () => [
      {
        label: 'Tổ chức',
        value: 'organizations',
      },
      {
        label: 'Cá nhân',
        value: 'individuals',
      },
    ],
    []
  );

  const activeTab = useMemo(() => {
    const param = searchParams.get('type');
    if (!param) return TAB_LIST[0].value;
    const type = TAB_LIST.find((item) => item.value === param);
    if (type) return type.value;
    return TAB_LIST[0].value;
  }, [searchParams, TAB_LIST]);

  const changeTabAction = (param: string) => {
    router.push(`/accounts?type=${param}`);
  };

  return (
    <div className='flex'>
      <Tabs
        defaultValue={activeTab}
        className=''
        value={activeTab}
        onValueChange={changeTabAction}
      >
        <TabsList className='flex gap-4 justify-start bg-transparent'>
          {TAB_LIST.map((item) => (
            <TabsTrigger
              key={item.value}
              value={item.value}
              className='data-[state=active]:bg-primary data-[state=active]:text-primary-foreground'
            >
              {item.label}
            </TabsTrigger>
          ))}
        </TabsList>
        {/* <TabsContent value='account'>tab</TabsContent> */}
        {/* <TabsContent value='password'>tab 2</TabsContent> */}
      </Tabs>
      <div className='ml-auto'>
        <div className='relative ml-auto'>
          <Input
            type='search'
            placeholder='Tìm kiếm'
            className='w-[300px] ml-auto pr-10'
            // {...field}
            // onChange={field.onChange}
          />
          <SearchIcon className='absolute right-4 top-0 bottom-0 m-auto' />
        </div>
      </div>
    </div>
  );
};

export default AccountFilter;
