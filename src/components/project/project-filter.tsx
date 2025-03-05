'use client';
import { SearchIcon } from 'lucide-react';
import React from 'react';
import { Input } from '../ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { useFormContext } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem } from '../ui/form';
import { z } from 'zod';
import { formSchema } from '.';

const ProjectFilter = () => {
  const form = useFormContext<z.infer<typeof formSchema>>();

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={onSubmit}>
        <div className='flex justify-start gap-4 mb-8'>
          {/* status dropdown */}
          {/* Trạng thái */}
          <Select>
            <SelectTrigger className='w-[180px]'>
              <SelectValue placeholder='Trạng thái' />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value='apple'>Đang thực hiện</SelectItem>
                <SelectItem value='banana'>Đạt mục tiêu</SelectItem>
                <SelectItem value='blueberry'>Đã kết thúc</SelectItem>
                <SelectItem value='grapes'>Tạm dừng</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          {/* Loại chương trình */}
          <Select>
            <SelectTrigger className='w-[180px]'>
              <SelectValue placeholder='Loại chương trình' />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value='apple'>Apple</SelectItem>
                <SelectItem value='banana'>Banana</SelectItem>
                <SelectItem value='blueberry'>Blueberry</SelectItem>
                <SelectItem value='grapes'>Grapes</SelectItem>
                <SelectItem value='pineapple'>Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          {/* Loại đóng góp */}
          <Select>
            <SelectTrigger className='w-[180px]'>
              <SelectValue placeholder='Loại đóng góp' />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value='apple'>Quyên góp tiền</SelectItem>
                <SelectItem value='banana'>Đăng ký tình nguyện viên</SelectItem>
                <SelectItem value='blueberry'>Quyên góp tiền & ĐKTN</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

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
