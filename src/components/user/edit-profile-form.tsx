'use client';
import React from 'react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

const EditProfileForm = () => {
  const formSchema = z.object({
    name: z.string().min(1, {
      message: 'Thông tin không được trống',
    }),
    address: z.string().min(1, {
      message: 'Thông tin không được trống',
    }),
    genre: z.string().min(1, {
      message: 'Thông tin không được trống',
    }),

    birthday: z.string().min(1, {
      message: 'Thông tin không được trống',
    }),
    phone: z.string().min(1, {
      message: 'Thông tin không được trống',
    }),
    email: z.string().min(1, {
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

    facebookUrl: z.string().optional(),
    youtubeUrl: z.string().optional(),
    tiktokUrl: z.string().optional(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
    defaultValues: {
      address: '',
      birthday: '',
      email: '',
      phone: '',
      studentId: '',
      class: '',
      department: '',
      facebookUrl: '',
      genre: '',
      name: '',
      tiktokUrl: '',
      youtubeUrl: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);

    // submit here
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='grid grid-cols-2 gap-4'
      >
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem className='col-span-1'>
              <FormLabel>Tên người dùng</FormLabel>
              <FormControl>
                <Input type='text' className=' ' placeholder='Tên' {...field} />
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
                <Input type='text' placeholder='Địa chỉ' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='genre'
          render={({ field }) => (
            <FormItem className='col-span-1'>
              <FormLabel>Giới tính</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder='Giới tính' />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {['Nam', 'Nữ'].map((item) => (
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
          name='facebookUrl'
          render={({ field }) => (
            <FormItem className='col-span-1'>
              <FormLabel>Facebook</FormLabel>
              <FormControl>
                <Input type='text' placeholder='facebook' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='birthday'
          render={({ field }) => (
            <FormItem className='col-span-1'>
              <FormLabel>Ngày sinh</FormLabel>
              <FormControl>
                <Input type='text' placeholder='birthday' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='youtubeUrl'
          render={({ field }) => (
            <FormItem className='col-span-1'>
              <FormLabel>Youtube</FormLabel>
              <FormControl>
                <Input type='text' placeholder='youtube' {...field} />
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
              <FormLabel>Điện thoại</FormLabel>
              <FormControl>
                <Input type='text' placeholder='Điện thoại' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='tiktokUrl'
          render={({ field }) => (
            <FormItem className='col-span-1'>
              <FormLabel>Tiktok</FormLabel>
              <FormControl>
                <Input type='text' placeholder='tiktok' {...field} />
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
                <Input type='text' placeholder='email' {...field} />
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
            <FormItem className='col-span-1'>
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

        <div className='col-span-2 flex justify-center'>
          <Button type='submit'>Cập nhật</Button>
        </div>
      </form>
    </Form>
  );
};

export default EditProfileForm;
