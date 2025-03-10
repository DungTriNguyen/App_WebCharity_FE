'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { useRouter } from 'next/navigation';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import FacebookIcon from '@/components/icons/facebook-icon';
import GmailIcon from '@/components/icons/gmail-icon';
import Link from 'next/link';

const SignUpPage = () => {
  const socialInfo = [
    {
      key: 'facebook',
      href: 'https://www.facebook.com/TruongDaihocSaiGon.SGU',
      icon: <FacebookIcon />,
    },
    {
      key: 'gmail',
      href: 'https://www.sgu.edu.vn/',
      icon: <GmailIcon />,
    },
  ];
  const router = useRouter();

  const formSchema = z.object({
    name: z.string().min(1, {
      message: 'Họ tên không được để trống',
    }),
    email: z.string().min(1, {
      message: 'Email không được để trống',
    }),
    phone: z.string().min(1, {
      message: 'Số điện thoại không được để trống',
    }),
    password: z.string().min(1, {
      message: 'Mật khẩu không được để trống',
    }),
    confirmPassword: z.string().min(1, {
      message: 'Xác nhận mật khẩu không được để trống',
    }),
    term: z.literal<boolean>(true, {
      errorMap: () => ({ message: 'Vui lòng đồng ý với các điều khoản' }),
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
      term: false,
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
            Đăng Ký
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
                name='name'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Họ tên</FormLabel>
                    <FormControl>
                      <Input placeholder='Họ tên' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

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
                name='phone'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Điện thoại</FormLabel>
                    <FormControl>
                      <Input placeholder='Điện thoại' {...field} />
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
                        placeholder='Mật khẩu'
                        type='password'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='confirmPassword'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nhập lại mật khẩu</FormLabel>
                    <FormControl>
                      <Input
                        placeholder='Xác nhận mật khẩu'
                        type='password'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='term'
                render={({ field }) => (
                  <FormItem className='flex items-center gap-2'>
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel className='!mt-0'>
                      Đồng ý với các điều khoản và điều kiện
                    </FormLabel>
                  </FormItem>
                )}
              />
              <Button type='submit'>Đăng ký</Button>
            </form>
          </Form>
          <div className='flex justify-start gap-1 items-center'>
            Bạn đã có tài khoản?
            <Button
              type='button'
              variant={'link'}
              className='p-0'
              onClick={() => router.push('/login')}
            >
              Đăng nhập ngay
            </Button>
          </div>
          <p className='text-center mb-2'>Hoặc</p>
          <div className='flex gap-4 justify-center '>
            {socialInfo.map((item) => (
              <Link
                href={item.href}
                key={item.key}
                className='flex flex-col items-center h-12 w-12 '
                target='_blank'
              >
                {item.icon}
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUpPage;
