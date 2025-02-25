'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import { Checkbox } from '../ui/checkbox';
import { Button } from '../ui/button';

const RegisterVolunteerForm = () => {
  const formSchema = z.object({
    supporter: z.string().min(1, {
      message: 'Thông tin không được trống',
    }),
    email: z.string().min(1, {
      message: 'Thông tin không được trống',
    }),
    phone: z.string().min(1, {
      message: 'Thông tin không được trống',
    }),
    studentId: z.string().min(1, {
      message: 'Thông tin không được trống',
    }),
    class: z.string().min(1, {
      message: 'Thông tin không được trống',
    }),
    department: z.string().min(1, {
      message: 'Thông tin không được trống',
    }),
    incognito: z.boolean().optional(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
    defaultValues: {
      supporter: '',
      email: '',
      phone: '',
      studentId: '',
      class: '',
      department: '',
      incognito: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Card className=''>
      <CardHeader>
        <CardTitle>Thông tin ủng hộ</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='grid grid-cols-2 gap-4'
          >
            <FormField
              control={form.control}
              name='supporter'
              render={({ field }) => (
                <FormItem className='col-span-2'>
                  <FormLabel>Họ và tên</FormLabel>
                  <FormControl>
                    <Input type='text' placeholder='Họ và tên' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem className='col-span-1'>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type='text' placeholder='Email' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='phone'
              render={({ field }) => (
                <FormItem className='col-span-1'>
                  <FormLabel>Số điện thoại</FormLabel>
                  <FormControl>
                    <Input type='text' placeholder='Điện thoại' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className='col-span-2'>
              <p className='font-bold'>Thông tin của bạn</p>
              <p className='italic'>
                Nếu bạn là sinh viên của trường đại học Sài Gòn
              </p>
            </div>
            <FormField
              control={form.control}
              name='studentId'
              render={({ field }) => (
                <FormItem className='col-span-2'>
                  <FormLabel>MSSV</FormLabel>
                  <FormControl>
                    <Input type='text' placeholder='MSSV' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='class'
              render={({ field }) => (
                <FormItem className='col-span-1'>
                  <FormLabel>Lớp</FormLabel>
                  <FormControl>
                    <Input type='text' placeholder='Lớp' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='department'
              render={({ field }) => (
                <FormItem className='col-span-1'>
                  <FormLabel>Khoa</FormLabel>
                  <FormControl>
                    <Input type='text' placeholder='Khoa' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='incognito'
              render={({ field }) => (
                <FormItem className='flex flex-row items-start space-x-3 space-y-0 col-span-2'>
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className='space-y-1 leading-none'>
                    <FormLabel>Ủng hộ ẩn danh</FormLabel>
                    {/* <FormDescription>Ủng hộ ẩn danh</FormDescription> */}
                  </div>
                </FormItem>
              )}
            />
            <Button type='submit' className='col-span-2'>
              Tham gia
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default RegisterVolunteerForm;
