'use client';
import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
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
import { Checkbox } from '../ui/checkbox';
import { useParams } from 'next/navigation';
import { useDepartmentQuery } from '@/hooks/use-department';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { useDonateMutation } from '@/hooks/use-donation';
import { Textarea } from '../ui/textarea';

const DonateForm = () => {
  const params = useParams();
  const projectId = params?.id || 0;
  const { data } = useDepartmentQuery();
  const { mutate } = useDonateMutation();

  const formSchema = z.object({
    amount: z.string().min(1, {
      message: 'Thông tin không được trống',
    }),
    name: z.string().min(1, {
      message: 'Thông tin không được trống',
    }),
    email: z.string().min(1, {
      message: 'Thông tin không được trống',
    }),
    phone_number: z.string().min(1, {
      message: 'Thông tin không được trống',
    }),
    student_code: z.string().min(1, {
      message: 'Thông tin không được trống',
    }),
    class: z.string().min(1, {
      message: 'Thông tin không được trống',
    }),
    department_id: z.string().min(1, {
      message: 'Thông tin không được trống',
    }),
    is_anonymous: z.boolean(),

    account_number: z.string().min(1, {
      message: 'Thông tin không được trống',
    }),
    account_name: z.string().min(1, {
      message: 'Thông tin không được trống',
    }),
    code: z.string().min(1, {
      message: 'Thông tin không được trống',
    }),
    note: z.string().nullable().optional(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
    defaultValues: {
      amount: '',
      name: '',
      email: '',
      phone_number: '',
      student_code: '',
      class: '',
      department_id: '',
      is_anonymous: false,
      account_number: '',
      account_name: '',
      code: '',
      note: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    await mutate({
      ...values,
      project_id: +projectId,
      amount: +values.amount,
    });
  };

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
              name='amount'
              render={({ field }) => (
                <FormItem className='col-span-2'>
                  <FormLabel>Nhập số tiền ủng hộ</FormLabel>
                  <FormControl>
                    <div className='relative'>
                      <Input
                        type='text'
                        className='text-2xl text-primary font-bold pr-16'
                        placeholder='1.000.000'
                        {...field}
                      />
                      <div className='absolute right-4 top-1 bottom-0 m-auto font-bold text-lg text-primary'>
                        VND
                      </div>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='name'
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
              name='phone_number'
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
              name='student_code'
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
              name='department_id'
              render={({ field }) => (
                <FormItem className='col-span-1'>
                  <FormLabel>Khoa</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value ?? ''}
                    value={field.value ?? undefined}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder='Khoa' />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {data?.data.map((item: TDepartment) => (
                        <SelectItem value={`${item.id}`} key={`${item.id}`}>
                          {item.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='is_anonymous'
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

            <div className='col-span-2'>
              <p className='font-bold'>Thông tin tài khoản</p>
            </div>

            <FormField
              control={form.control}
              name='account_name'
              render={({ field }) => (
                <FormItem className='col-span-2'>
                  <FormLabel>Chủ tài khoản</FormLabel>
                  <FormControl>
                    <Input type='text' placeholder='Họ và tên' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='account_number'
              render={({ field }) => (
                <FormItem className='col-span-1'>
                  <FormLabel>Số tài khoản</FormLabel>
                  <FormControl>
                    <Input type='text' placeholder='Số tài khoản' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='code'
              render={({ field }) => (
                <FormItem className='col-span-1'>
                  <FormLabel>Code</FormLabel>
                  <FormControl>
                    <Input type='text' placeholder='Code' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='note'
              render={({ field }) => (
                <FormItem className='col-span-2'>
                  <FormLabel>Chủ tài khoản</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder='Nội dung'
                      {...field}
                      value={field.value ?? ''}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type='submit'
              className='col-span-2'
              disabled={!form.formState.isValid}
            >
              Ủng hộ
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default DonateForm;
