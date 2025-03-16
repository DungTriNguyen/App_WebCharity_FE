import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Input } from '../ui/input';
import { SearchIcon } from 'lucide-react';

const AccountFilter = () => {
  return (
    <div className='flex'>
      <Tabs defaultValue='account' className=''>
        <TabsList className='flex gap-4 justify-start bg-transparent'>
          <TabsTrigger
            value='account'
            className='data-[state=active]:bg-primary data-[state=active]:text-primary-foreground'
          >
            Tổ chức
          </TabsTrigger>
          <TabsTrigger
            value='password'
            className='data-[state=active]:bg-primary data-[state=active]:text-primary-foreground'
          >
            Cá nhân
          </TabsTrigger>
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
