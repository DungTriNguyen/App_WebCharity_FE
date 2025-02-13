'use client';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useRouter } from 'next/navigation';
import React from 'react';
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
} from '@/components/ui/form';

const LoginPage = () => {
  const router = useRouter();

  const formSchema = z.object({
    email: z.string().min(1, {
      message: 'Email must be at least 1 character.',
    }),
    password: z.string().min(1, {
      message: 'Password must be at least 1 character.',
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  };

  return (
    <div className='bg-login-background min-h-screen w-full bg-cover object-contain bg-no-repeat flex justify-center items-center'>
      <Card className='w-[480px]'>
        <CardHeader>
          <CardTitle className='text-center font-bold text-2xl'>
            Đăng Nhập
          </CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              className='flex flex-col gap-4'
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder='Email' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='password'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mật khẩu</FormLabel>
                    <FormControl>
                      <Input
                        placeholder='Password'
                        type='password'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type='submit' disabled={!form.formState.isValid}>
                Đăng Nhập
              </Button>
            </form>
          </Form>
          <div className='flex justify-between'>
            <div className='flex items-center gap-1'>
              Bạn chưa có tài khoản?{' '}
              <Button
                type='button'
                variant={'link'}
                className='p-0'
                onClick={() => router.push('/register')}
              >
                Đăng ký ngay
              </Button>
            </div>
            <Button variant={'link'} className='p-0' type='button'>
              Quên mật khẩu
            </Button>
          </div>
          <p className='text-center'>Hoặc</p>
          facebook logo, google logo
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;
