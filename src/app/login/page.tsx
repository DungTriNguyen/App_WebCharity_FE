'use client';
import FacebookIcon from '@/components/icons/facebook-icon';
import GmailIcon from '@/components/icons/gmail-icon';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useLoginMutation } from '@/hooks/use-login';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const LoginPage = () => {
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
    email: z.string().min(1, {
      message: 'Email không được để trống',
    }),
    password: z.string().min(1, {
      message: 'Mật khẩu không được để trống',
    }),
  });

  const { mutate: loginAction, isPending, isSuccess } = useLoginMutation();

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
    // console.log(values);
    const { email, password } = values;
    loginAction({ email, password });
  };

  useEffect(() => {
    if (isSuccess) {
      form.reset();
    }
  }, [isSuccess, form]);

  return (
    <div className='bg-login-background min-h-screen w-full bg-cover object-contain bg-no-repeat flex justify-center items-center'>
      <Card className='w-[480px]'>
        <CardHeader>
          <CardTitle className='text-center font-bold text-2xl'>
            <Link href='/'>
              <svg
                width='20'
                height='20'
                viewBox='0 0 15 15'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z'
                  fill='currentColor'
                  fillRule='evenodd'
                  clipRule='evenodd'
                ></path>
              </svg>
            </Link>
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
                        placeholder='Mật khẩu'
                        type='password'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type='submit'
                disabled={!form.formState.isValid || isPending}
              >
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
                onClick={() => router.push('/sign-up')}
              >
                Đăng ký ngay
              </Button>
            </div>
            <Button variant={'link'} className='p-0' type='button'>
              Quên mật khẩu
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

export default LoginPage;
