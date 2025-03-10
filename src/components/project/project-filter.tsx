'use client';
import { SearchIcon } from 'lucide-react';
import React from 'react';
import { Input } from '../ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { useFormContext } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem } from '../ui/form';
import { z } from 'zod';
import { formSchema } from '.';
import { CAMPAIGN_STATUS, CAMPAIGN_TYPE } from '@/app/enum';

const ProjectFilter = () => {
  const form = useFormContext<z.infer<typeof formSchema>>();

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    // console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={onSubmit}>
        <div className='flex justify-start gap-4 mb-8'>
          {/* Trạng thái */}
          <FormField
            control={form.control}
            name='front_status'
            render={({ field }) => (
              <FormItem>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className='w-[180px]'>
                      <SelectValue placeholder='Trạng thái' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {[
                      CAMPAIGN_STATUS.IN_PROGRESS,
                      CAMPAIGN_STATUS.COMPLETED,
                      CAMPAIGN_STATUS.PENDING,
                      CAMPAIGN_STATUS.ENDED,
                    ].map((item) => (
                      <SelectItem value={item} key={item}>
                        {item}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />

          {/* Loại đóng góp */}
          <FormField
            control={form.control}
            name='type'
            render={({ field }) => (
              <FormItem>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className='w-[250px]'>
                      <SelectValue placeholder='Loại đóng góp' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {[
                      CAMPAIGN_TYPE.DONATE,
                      CAMPAIGN_TYPE.VOLUNTEER,
                      CAMPAIGN_TYPE.MULTIPLE,
                    ].map((item) => (
                      <SelectItem value={item} key={item}>
                        {item}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='keyword'
            render={({ field }) => {
              return (
                <FormItem className='w-full'>
                  <FormControl className='w-full'>
                    <div className='relative ml-auto'>
                      <Input
                        type='search'
                        placeholder='Tìm kiếm tên chương trình'
                        className='w-[300px] ml-auto pr-10'
                        {...field}
                        onChange={field.onChange}
                      />
                      <SearchIcon className='absolute right-4 top-0 bottom-0 m-auto' />
                    </div>
                  </FormControl>
                </FormItem>
              );
            }}
          />
        </div>
        {/* <Button type='submit'>submit</Button> */}
      </form>
    </Form>
  );
};

export default ProjectFilter;
