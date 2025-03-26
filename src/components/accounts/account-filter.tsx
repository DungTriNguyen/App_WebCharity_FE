'use client';
import React, { useMemo, useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Input } from '../ui/input';
import { SearchIcon } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import AccountList from './account-list';

const AccountFilter = () => {
  const [search, setSearch] = useState('');
  const searchParams = useSearchParams();
  const router = useRouter();

  const TAB_LIST = useMemo(
    () => [
      {
        label: 'Tổ chức',
        value: 'organization',
      },
      {
        label: 'Cá nhân',
        value: 'individual',
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
    <>
      <div className='container 2xl:max-w-[1200px] mx-auto py-16'>
        <h3 className='text-center font-bold text-3xl mb-10'>
          Danh sách cá nhân/ tổ chức gây quỹ
        </h3>
        <div className='flex pb-14'>
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
          </Tabs>
          <div className='ml-auto'>
            <div className='relative ml-auto'>
              <Input
                type='search'
                placeholder='Tìm kiếm'
                className='w-[300px] ml-auto pr-10'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <SearchIcon className='absolute right-4 top-0 bottom-0 m-auto' />
            </div>
          </div>
        </div>
        <AccountList type={activeTab} search={search} />
      </div>
    </>
  );
};

export default AccountFilter;
