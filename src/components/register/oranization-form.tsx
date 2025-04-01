'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

const formSchema = z.object({
  name: z.string().min(1, {
    message: 'Thông tin không được trống',
  }),

  birth: z.string().min(1, {
    message: 'Thông tin không được trống',
  }),
  website: z.string().min(1, {
    message: 'Thông tin không được trống',
  }),
  field: z.string().min(1, {
    message: 'Thông tin không được trống',
  }),
  address: z.string().min(1, {
    message: 'Thông tin không được trống',
  }),
  username: z.string().min(1, {
    message: 'Thông tin không được trống',
  }),
  information: z.string().min(1, {
    message: 'Thông tin không được trống',
  }),
  representative_name: z.string().min(1, {
    message: 'Thông tin không được trống',
  }),
  representative_phone_number: z.string().min(1, {
    message: 'Thông tin không được trống',
  }),
  representative_email: z.string().min(1, {
    message: 'Thông tin không được trống',
  }),
  related_images: z.array(z.string()).optional().nullable(),
});

const OrganizationForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
    defaultValues: {
      name: '',
      birth: '',
      website: '',
      field: '',
      address: '',
      username: '',
      information: '',
      representative_name: '',
      representative_phone_number: '',
      representative_email: '',
      related_images: [],
    },
  });
  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };
  return (
    <Form {...form}>
      <form
        className='grid grid-cols-2 gap-4'
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem className='col-span-1'>
              <FormLabel>Tên tổ chức</FormLabel>
              <FormControl>
                <Input {...field} placeholder='Tên tổ chức' />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='birth'
          render={({ field }) => (
            <FormItem className='col-span-1'>
              <FormLabel>Ngày thành lập</FormLabel>
              <FormControl>
                <Input {...field} placeholder='Ngày thành lập' />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='website'
          render={({ field }) => (
            <FormItem className='col-span-1'>
              <FormLabel>Website</FormLabel>
              <FormControl>
                <Input {...field} placeholder='Website' />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='field'
          render={({ field }) => (
            <FormItem className='col-span-1'>
              <FormLabel>Lĩnh vực</FormLabel>
              <FormControl>
                <Input {...field} placeholder='Lĩnh vực' />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='username'
          render={({ field }) => (
            <FormItem className='col-span-1'>
              <FormLabel>Tên tài khoản</FormLabel>
              <FormControl>
                <Input {...field} placeholder='Tên tài khoản' />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='information'
          render={({ field }) => (
            <FormItem className='col-span-1'>
              <FormLabel>Thông tin</FormLabel>
              <FormControl>
                <Input {...field} placeholder='Thông tin' />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='address'
          render={({ field }) => (
            <FormItem className='col-span-1'>
              <FormLabel>Địa chỉ</FormLabel>
              <FormControl>
                <Input {...field} placeholder='Địa chỉ' />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='representative_name'
          render={({ field }) => (
            <FormItem className='col-span-1'>
              <FormLabel>Tên đại diện</FormLabel>
              <FormControl>
                <Input {...field} placeholder='Tên đại diện' />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='representative_phone_number'
          render={({ field }) => (
            <FormItem className='col-span-1'>
              <FormLabel>Số điện thoại</FormLabel>
              <FormControl>
                <Input {...field} placeholder='Số điện thoại' />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='representative_email'
          render={({ field }) => (
            <FormItem className='col-span-1'>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} placeholder='Email' />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className='col-span-2 flex justify-center'>
          <Button type='submit'>Gửi</Button>
        </div>
      </form>
    </Form>
  );
};

export default OrganizationForm;
