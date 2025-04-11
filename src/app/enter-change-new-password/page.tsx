'use client';
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
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const ForgotPasswordPage = () => {
  const searchParams = useSearchParams();
  const error = searchParams.get('error');

  const formSchema = z.object({
    password: z.string().min(8, {
      message: 'Mật khẩu phải có ít nhất 8 ký tự',
    }),
    confirmPassword: z.string().min(8, {
      message: 'Mật khẩu phải có ít nhất 8 ký tự',
    }),
  });

  const { mutate: loginAction, isPending, isSuccess } = useLoginMutation();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const { password, confirmPassword } = values;
    // Add empty password to satisfy type requirements
    loginAction({ password, confirmPassword });
  };

  useEffect(() => {
    if (isSuccess) {
      form.reset();
    }
  }, [isSuccess, form]);

  useEffect(() => {
    if (error) {
      form.setError('password', {
        message: error,
      });
    }
  }, [error, form]);

  return (
    <div className='bg-login-background min-h-screen w-full bg-cover object-contain bg-no-repeat flex justify-center items-center'>
      <Card className='w-[480px]'>
        <CardHeader>
          <CardTitle className='text-center font-bold text-2xl'>
            <Link href='/forgot-password'>
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
                />
              </svg>
            </Link>
            Nhập lại mật khẩu
          </CardTitle>
          <CardDescription>
            Hãy chọn hiện mật khẩu để kiểm tra mật khẩu của bạn trước khi hoàn
            tất
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              className='flex flex-col gap-4'
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <FormField
                control={form.control}
                name='password'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mật khẩu mới</FormLabel>
                    <FormControl>
                      <Input placeholder='Mật khẩu mới' {...field} />
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
                    <FormLabel>Nhập lại mật khẩu mới</FormLabel>
                    <FormControl>
                      <Input placeholder='Nhập lại mật khẩu mới' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type='submit'
                disabled={!form.formState.isValid || isPending}
              >
                Cập nhật mật khẩu
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ForgotPasswordPage;
