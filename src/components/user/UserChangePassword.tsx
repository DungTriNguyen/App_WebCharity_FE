'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '../ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';

const formSchema = z.object({
  old_password: z.string().min(1, { message: 'Thông tin không được trống' }),
  new_password: z.string().min(1, { message: 'Thông tin không được trống' }),
  new_password_confirmation: z.string().min(1, {
    message: 'Thông tin không được trống',
  }),
});

const UserChangePassword = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
    defaultValues: {
      old_password: '',
      new_password: '',
      new_password_confirmation: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const updateData = {
      old_password: values.old_password,
      new_password: values.new_password,
      new_password_confirmation: values.new_password_confirmation,
    };

    mutate(updateData);
  }

  // if (isLoading) {
  //   return <div>Đang tải dữ liệu...</div>;
  // }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='grid grid-cols-2 w-[600px] gap-6'
      >
        <FormField
          control={form.control}
          name='old_password'
          render={({ field }) => (
            <FormItem className='col-span-2'>
              <FormLabel>
                Mật khẩu cũ <span className='text-red-500'>*</span>
              </FormLabel>
              <FormControl>
                <Input
                  type='password'
                  placeholder='Mật khẩu cũ'
                  {...field}
                  value={field.value ?? ''}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='new_password'
          render={({ field }) => (
            <FormItem className='col-span-2'>
              <FormLabel>
                Mật khẩu mới <span className='text-red-500'>*</span>
              </FormLabel>
              <FormControl>
                <Input
                  type='password'
                  placeholder='Mật khẩu mới'
                  {...field}
                  value={field.value ?? ''}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='new_password_confirmation'
          render={({ field }) => (
            <FormItem className='col-span-2'>
              <FormLabel>
                Nhập lại mật khẩu mới <span className='text-red-500'>*</span>
              </FormLabel>
              <FormControl>
                <Input
                  type='text'
                  placeholder='Nhập lại mật khẩu mới'
                  {...field}
                  value={field.value ?? ''}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className='col-span-2 flex justify-center'>
          <Button type='submit' disabled={!form.formState.isValid}>
            Cập nhật
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default UserChangePassword;
